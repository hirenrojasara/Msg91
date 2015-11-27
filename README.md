# Msg91
Msg91 API for node.js


[![NPM](https://nodei.co/npm/msg91.png?downloads=true)](https://npmjs.org/package/msg91)


# Msg91 Installation

```javascript 
npm install msg91 --save
```

# Msg91 Integration


### Send SMS

```javascript
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

