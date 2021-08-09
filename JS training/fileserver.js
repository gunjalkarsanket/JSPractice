var http=require("http");
var fs=require("fs");
var url=require("url");
var server=module.createServer(function(req,res)
{
    res.writeHead(200,{'content-type':'text/html'});
    res.write("hi\n");
    //url.parse()
    filesystem.readFile("hello.html",function(error,data){
        res.write("Reading data"+data);
        res.end();
    });
      var q=url.parse("http://localhost:8085/hello.html?h")
       
    res.end("hello from 8085");
    
});