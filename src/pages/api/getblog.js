import * as fs from 'fs';

export default async function handler(req, res) {
    
    fs.readFile(`blogdata/${req.query.slug}.json`,`utf-8`,(err,data)=>{
        if(err){
            res.status(500).json({err:`NOT FOUND`})
        }
        console.log(req.query.slug);
        console.log(data);
        res.status(200).json(JSON.parse(data))
    })
}