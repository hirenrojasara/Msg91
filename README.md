# Msg91
Msg91 API for node.js

How to integrate:

```sh
var msg91 = require("msg91")("API_KEY", "SENDER_ID", "ROUTE_NO" );

msg91.send("MOBILE_NO", "MESSAGE", function(err, response){
    console.log(err);
    console.log(response);
})
```

# Msg91 Installation
> npm install msg91 --save

ROUTE_NO

1 - Promotional Route

4 - Transactional Route


