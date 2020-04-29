const express = require('express');
const app = express();
const port = process.env.PORT | 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

// set up the static file
app.use(express.static('./assests'))

// use express-ejs-layouts
app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts',true);
// use express routes
app.use('/',require('./routes'));

// set the view engine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,(err)=>{
    if(err){
        console.log(`Server is not responding:${err}`);
        return;
    }
    console.log(`Server is up on port:${port}`);

});