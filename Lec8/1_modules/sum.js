console.log("This is my sum module")


var myname="Devansh";
function sumoftwonumbers(x,y){
    const sum=x+y;
    console.log(sum);
}

module.exports={
    myname: myname,
    sumoftwonumbers:sumoftwonumbers
}