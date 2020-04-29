const express = require('express');
const app = express();
const port = process.env.PORT | 8000;


// use express routes

app.use('/',require('./routes'));



app.listen(port,(err)=>{
    if(err){
        console.log(`Server is not responding:${err}`);
        return;
    }
    console.log(`Server is up on port:${port}`);

});