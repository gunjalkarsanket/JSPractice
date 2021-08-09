var fs= require("fs");
var readF=fs.createReadStream("input.txt");

readF.on("open",function()
{
console.log("raed file");
});

readF.on("data",function()
{
console.log("raed file");
});
