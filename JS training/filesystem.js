var filesystem= require("fs");

var module=require('http');
var server=module.createServer(function(req,res)
{
    res.writeHead(200,{'content-type':'text/html'});
    res.write("hi\n");
   // res.end("hello from 8085");
    filesystem.readFile("hi.html",function(error,data){
        res.write("Reading data"+data);
        res.end();
    });

    
});
server.listen(8087);
console.log("ok ok");