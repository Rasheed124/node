
// Custom Modules
const {people, age} = require('./people')

// Built In Modules 


// OS
const os = require('os')

// console.log(os.platform());

// FS
const fs = require('fs');
const { log } = require('console');


// readFile

// fs.readFile('./blog.txt', (err, data) => {

//     if(err) {
//         console.log(err);
//     }

//     console.log(data.toString())
// })

// writeFile

// fs.writeFile("./blog.txt", "Hi, Welcome to my Blog Post", (err) => {

//     if(err){
//         log(err)
//     }

//     log("file created sucessfully")
// })

// if(fs.existsSync("./blog")){
//         fs.mkdir("./blog/post", (err) => {
//         if(err) throw err
//         log("Folder")
//     })

//     fs.unlink("./blog.txt", (err) => {
//         if(err) throw err
//         log("file deleted")
//     })
// }

// STREAMS & BUFFERS

const readStream = fs.createReadStream('./docs/blog1.txt', {encoding: "utf-8"})

const writeStream = fs.createWriteStream('./docs/blog2.txt')

// readStream.on("data", (chunk) => {
//     log("==New Chunk==")
//     writeStream.write("==New Chunk==")
//     writeStream.write(chunk)
// })

readStream.pipe(writeStream)