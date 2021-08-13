var q=require('q');
function square()
{
var num=10;
var res=num*num;
return res;
}
var r=q.denodeify(square);
var promise=square;
promise.then
{
    console.log(square());
}
console.log(square());