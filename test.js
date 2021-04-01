/**
 * Created by hiren on 26/11/15.
 */

 var msg91 = require("./index")("API", "SENDERID", "ROUTE");

 var mobileNo = "XXXXXXXXXX";
 
 msg91.send(mobileNo, "MESSAGE","DLT_TE_ID", function (err, response) {
     console.log(err);
     console.log(response);
 });
 
 
 var mobileList = [ "XXXXXXXXXX", "XXXXXXXXXX", "XXXXXXXXXX" ];
 
 msg91.send(mobileList, "MESSAGE","DLT_TE_ID",function (err, response) {
     console.log(err);
     console.log(response);
 });
 
 var mobileNoCSV =  "XXXXXXXXXX,XXXXXXXXXX,XXXXXXXXXX";
 
 msg91.send(mobileNoCSV, "MESSAGE","DLT_TE_ID", function (err, response) {
     console.log(err);
     console.log(response);
 });
 
 msg91.getBalance(function(err, response){
     console.log(err);
     console.log(response);
 })
 
 msg91.getBalance("ROUTE", function(err, response){
     console.log(err);
     console.log("Custom Router : " + response);
 })
 
 
 
