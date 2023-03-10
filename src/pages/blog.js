import Link from 'next/link';
import React from 'react'
import { useState } from "react";
import styles from '@/styles/Home.module.css'
import * as fs from "fs"

const Blog = (props) => {
  // console.log(props);

  const [blog, setblog] = useState(props.allBlogs);
  // useEffect(() => {   COME from API in file-system based routing 
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
      {blog.map((blogitem) => {
        // blog is empty
        // map() creates a new array from calling a function for every array element.
        return (
          <div key={blogitem.slug}>
            <Link href={`/blogpost/${blogitem.slug}`}>
              <div className={styles.blogItem}><h3>{blogitem.title}</h3>
                <p>{blogitem.description.substr(0, 40)}...</p>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  </main>
}

export async function getStaticProps(context) { // Run Static
  // Make Out

  let data = await fs.promises.readdir("blogdata")
  // data type OBJECT  
  console.log(data.length);

  let myFile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log('it me', item);
    myFile = await fs.promises.readFile((`blogdata/${encodeURIComponent(item)}`), 'utf-8')

    allBlogs.push(JSON.parse(myFile))
    return {
      props: { allBlogs }
    }
  }
}

export default Blog

