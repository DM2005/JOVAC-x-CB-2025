const fs=require('fs')
// var figlet=require('figlet')

// figlet("hello world" , function(err,data){
//     if(err)
//     {
//         console.log("Something weent wrong");
//         console.log("err");
//     }
//     console.log(data);
// });

// readFile -:
// const fs=require('fs')


// fs.readFile("math.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("Something weent wrong");
//     }
//     console.log(data);
// })

//writefile-:

// fs.writeFile("app.js","const a=20", (err)=>{
//     if(err)
//     {
//         console.log("Something weent wrong");
//     }
//     else{
//         console.log("File created successfully");
//     }

// })

// updatefile-:

// fs.appendFile("app.js","var b=20",(err)=>
// {
//     if(err){
//         console.log(err);

//     }
//     else{
//         console.log("File updated successfully");
//     }
// })

//deletefile

fs.unlink("app.js",(err)=>
{
    if(err)
    {
        console.log(err);
    }
    console.log("File deleted successfully");

})