//http://localhost:3000/api/blogging   -> Save Json data here
import * as fs from "fs"

export default async function handler(req, res) {
    
    let data = await fs.promises.readdir("blogdata")
   // data type OBJECT  
    let myFile;
    let myBLog = [];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        // item type STRING
        myFile = await fs.promises.readFile((`blogdata/${encodeURIComponent(item)}`), ('utf-8'))
        // Linking to dynamic paths 
       // myFile = await fs.promises.readFile((`blogdata/${item}`), ('utf-8'))

        // myFile type STRING
        myBLog.push(JSON.parse(myFile)) //JSON.parse string to object and move in an Array
    }
    res.status(200).json(myBLog)
}