const http = require('http');
const express = require('express');
const path = require('path');
var hostname = '127.0.0.1';
var port = '8081';

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.use('/',function(req,res){
res.sendFile(path.join(__dirname+ '/public/index.html'));
res.sendFile(path.join(__dirname+ '/public/app/js'));
res.sendFile(path.join(__dirname+ '/public/'));
res.sendFile(path.join(__dirname+ '/public/index.html'));
res.sendFile(path.join(__dirname+ '/public/index.html'));
});
http.createServer(app).listen(port,hostname, () =>
  
{
  console.log(`Server running at http://${hostname}:${port}/`);
});
