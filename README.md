# Msg91


Msg91 API for node.js

Last Updated : 01/04/2021


# Msg91 Integration


### Send SMS

```javascript
var msg91 = require("./index.js")("API_KEY", "SENDER_ID", "ROUTE_NO" );


// Mobile No can be a single number, list or csv string

var mobileNo = "XXXXXXXXXX";

var mobileNo = [ "XXXXXXXXXX", "XXXXXXXXXX", "XXXXXXXXXX" ];

var mobileNo =  "XXXXXXXXXX,XXXXXXXXXX,XXXXXXXXXX";

msg91.send(mobileNo, "MESSAGE", "DLT_TE_ID", function(err, response){
    console.log(err);
    console.log(response);
});
```




### Get Balance

```javascript
msg91.getBalance(function(err, msgCount){
    console.log(err);
    console.log(msgCount);
});

// Get Balance for given Route.
msg91.getBalance("ROUTE_NO", function(err, msgCount){
    console.log(err);
    console.log(msgCount);
});
```



# Msg91 Constants


### ROUTE_NO
```javascript
1 - Promotional Route
4 - Transactional Route
```

### DLT_TE_ID
```
TRAI assigns a template ID to all whitelisted templates. This should be passed as a string param
```
