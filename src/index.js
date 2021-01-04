const express = require('express');
const app = express() ;


app.get('/' , (req , res) =>{
    console.log("working for request / ");
    res.send("Hello Gokul express exe file completed test");

})



app.listen(3000);