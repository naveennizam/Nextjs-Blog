// import Link from 'next/link';
import React from 'react'
// import { useState } from "react";
import styles from '@/styles/Home.module.css'
// import * as fs from "fs"

const Blog = (props) => {
  

  return (
    <div >
     <h1>Blog</h1>
    </div>
  )
}

// export async function getStaticProps(context) { 
//   let data = await fs.promises.readdir("blogdata")
//   // data type OBJECT  
//    let myFile;
//    let myBLog = [];
//    for (var i = 0 ; i < data.length ; i++ ){
//     const item = data[i]
//     myFile = await fs.promises.readFile((`blogdata/${encodeURIComponent(item)}`), ('utf-8'))
//     myBLog.push(JSON.parse(myFile))
//   }
//        return { props : { myBLog  } }
  
// }



export default Blog