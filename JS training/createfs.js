var filesystem= require("fs");
filesystem.appendFile("hi.html","datapassed",function(error)
{
    console.log("appended");
});
filesystem.writeFile("magic.html","datapassed",function(error)
{
    console.log("writed");
});
filesystem.rename("magic1.html","magic2.html",function(error)
{
if (error) throw error
console.log("renamed");

});
