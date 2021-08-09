var fs= require("fs");
var zlib=require("zlib");
var readStream=fs.createReadStream("input.txt");
var writeStream=fs.createWriteStream("output.txt");
readStream.pipe(writeStream);
console.log("hi");
fs.createReadStream("input2.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("input2.txt.gz"));
