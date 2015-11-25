# Msg91
Msg91 API for node.js

How to integrate:

var msg91 = require("./app")("API_KEY", "SENDER_ID", "ROUTE_NO" );

msg91.send("MOBILE_NO, "MESSAGE", function(err, response){
    console.log(err);
    console.log(response);
})


ROUTE_NO
==============
1 - Promotional Route
4 - Transactional Route