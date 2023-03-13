import Link from 'next/link';
import React from 'react'
import { useState } from "react";
import styles from '@/styles/Home.module.css'
import * as fs from "fs"

const Blog = (props) => {
  

  const [blogging, setblog] = useState(props.myBLog);
  // useEffect(() => {  // COME from API in file-system based routing 
  //   console.log(`it's running`);
  //   fetch("/api/blogging").then((a) => {
  //     return a.json(); // json() is asynchronous and returns a Promise object that resolves to a JavaScript object. and use with fetch API.
  //   })
  //     .then((data) => {
  //       // data get to blogging
  //       setblog(data);
  //     })
  // }, []);
  return <main className={styles.main}>
    <div className={styles.blog}>
      { blogging.map((blogitem) => {
        // blogging is empty
        // map() creates a new array from calling a function for every array element.
        return (
          <div key={blogitem.slug}>
            <Link href={`/blogpost/${blogitem.slug}`}>
              <div className={styles.blogItem}><h3>{blogitem.title}</h3>
                <p>{blogitem.description.substr(0,100)}....</p>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  </main>
}

export async function getStaticProps(context) { 
  let data = await fs.promises.readdir("blogdata")
  // data type OBJECT  
   let myFile;
   let myBLog = [];
   for (var i = 0 ; i < data.length ; i++ ){
    const item = data[i]
    myFile = await fs.promises.readFile((`blogdata/${encodeURIComponent(item)}`), ('utf-8'))
    myBLog.push(JSON.parse(myFile))
  }
       return { props : { myBLog  } }
  
}

//}
// export async function getServerSideProps(context) {
//   let data = await fetch(`http://localhost:3000/api/blogging`)
//   let myBLog = await data.json()
//   return { props: { myBLog }, }
// }

export default Blog