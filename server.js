const express = require('express');
const path = require('path');

const app= express();

const publicPath=path.join(__dirname,'public')
//console.log(publicPath);

app.use(express.static(publicPath));

app.listen(5000);

//var server=app.listen(5000);
console.log("Server is running on port 5000");