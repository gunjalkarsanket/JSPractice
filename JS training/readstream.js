var fs= require("fs");
var readF=fs.createReadStream("./magic.html");
readF.on("open",function()
{
console.log("raed file");
});