const fs=require("fs")

// create file

// fs.writeFile("test.html","html",(err)=>{
//     if (err) {
//         console.log(err);
//     }
//     else{
//         console.log("created");
//     }
// })

// Read file

// fs.readFile("test.txt","utf-8",(err,data)=>{
//     if (err) {
//         console.log(err);       
//     }
//     else{
//         console.log(data);
//     }
// })

// Rename

// fs.rename("test.html","test.js",(err)=>{
//     if(err){
//         console.log(err);        
//     }
//     else{
//         console.log("rename");
//     }
// })

// delete

fs.unlink("test.js",(err)=>{
    if (err) {
        console.log(err);
    }
    else{
        console.log("deleted");
    }
})