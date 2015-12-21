/**
 *
 * @param authKey
 * @param senderId
 * @param route : Value can be 1 for Promotional Router or 4 for Transactional Route
 */
module.exports = function (authKey, senderId, route) {

    if (authKey == null || authKey == "") {
        throw new Error("MSG91 Authorization Key not provided.");
    }

    if (senderId == null || senderId == "") {
        throw new Error("MSG91 Sender Id is not provided.");
    }

    if (route == null || route == "") {
        throw new Error("MSG91 router Id is not provided.");
    }

    this.send = function (mobileNos, message, callback) {

        callback = modifyCallbackIfNull(callback);

        mobileNos = validateMobileNos(mobileNos);

        message = validateMessage(message);

        var isUnicode = isUnicodeString(message);

        var postData = "authkey=" + authKey + "&sender=" + senderId + "&mobiles=" + mobileNos + "&message=" + message + "&route=" + route;

        if(isUnicode){
            postData = "&unicode=1";
        }

        var options = {
            hostname: 'control.msg91.com',
            port: 80,
            path: '/api/sendhttp.php',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': postData.length
            }
        };

        makeHttpRequest(options, postData, function(err, data){
            callback(err, data);
        });



    };

    this.getBalance = function(customRoute, callback) {

        if(arguments.length == 1) {
            callback = customRoute;
            customRoute = null;
        }

        callback = modifyCallbackIfNull(callback);

        var currentRoute = customRoute || route;

        var options = {
            hostname: 'control.msg91.com',
            port: 80,
            path: '/api/balance.php?authkey=' + authKey + '&type=' + currentRoute,
            method: 'GET'
        };

        makeHttpRequest(options, null, function(err, data){
            callback(err, data);
        });

    }

    return this;

};

function validateMobileNos(mobileNos){

    if (mobileNos == null || mobileNos == "") {
        throw new Error("MSG91 : Mobile No is not provided.");
    }

    if(mobileNos instanceof Array){
        mobileNos = mobileNos.join(",");
    }

    return mobileNos
}

function validateMessage(message){

    if (message == null || message == "") {
        throw new Error("MSG91 : message is not provided.");
    }

    return message;
}

function modifyCallbackIfNull(callback){
    return callback || function(){};
}

function isUnicodeString(str) {
    for (var i = 0, n = str.length; i < n; i++) {
        if (str.charCodeAt( i ) > 255) { return true; }
    }
    return false;
}

function makeHttpRequest(options, postData, callback) {

    var http = require("http");
    var data = "";
    var req = http.request(options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on('end', function () {
            callback(null, data);
        })
    });

    req.on('error', function (e) {
        callback(e);
    });

    if(postData!=null){
        req.write(postData);
    }

    req.end();

}
