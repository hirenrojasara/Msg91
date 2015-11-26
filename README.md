# Msg91
Msg91 API for node.js

# Msg91 Installation
```sh 
npm install msg91 --save
```


How to integrate:

```sh

var msg91 = require("msg91")("API_KEY", "SENDER_ID", "ROUTE_NO" );


// Mobile No can be a single number, list or csv string

var mobileNo = "XXXXXXXXXX";

var mobileNo = [ "XXXXXXXXXX", "XXXXXXXXXX", "XXXXXXXXXX" ];

var mobileNo =  "XXXXXXXXXX,XXXXXXXXXX,XXXXXXXXXX";


msg91.send(mobileNo, "MESSAGE", function(err, response){
    console.log(err);
    console.log(response);
});

```


ROUTE_NO

1 - Promotional Route

4 - Transactional Route


