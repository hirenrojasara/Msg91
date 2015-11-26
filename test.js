/**
 * Created by hiren on 26/11/15.
 */

var msg91 = require("msg91")("API_KEY", "SENDER_ID", "ROUTE_NO");

var mobileNo = "XXXXXXXXXX";

msg91.send("mobileNo", "MESSAGE", function (err, response) {
    console.log(err);
    console.log(response);
});


var mobileList = [ "XXXXXXXXXX", "XXXXXXXXXX", "XXXXXXXXXX" ];

msg91.send(mobileList, "MESSAGE", function (err, response) {
    console.log(err);
    console.log(response);
});

var mobileNoCSV =  "XXXXXXXXXX,XXXXXXXXXX,XXXXXXXXXX";

msg91.send(mobileNoCSV, "MESSAGE", function (err, response) {
    console.log(err);
    console.log(response);
});