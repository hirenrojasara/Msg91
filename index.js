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

        callback = callback || function(){};

        if (mobileNos == null || mobileNos == "") {
            throw new Error("MSG91 : Mobile No is not provided.");
        }

        if(mobileNos instanceof Array){
            mobileNos = mobileNos.join(",");
        }

        if (message == null || message == "") {
            throw new Error("MSG91 : message is not provided.");
        }

        var postData = "authkey=" + authKey + "&sender=" + senderId + "&mobiles=" + mobileNos + "&message=" + message + "&route=" + route;

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
        })

    };

    return this;

};

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

    req.write(postData);
    req.end();

}
