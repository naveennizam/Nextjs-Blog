import React from 'react'   // Dynamic Routing
import {  useState } from "react";
import styles from '@/styles/Home.module.css';
import * as fs from "fs"

const Slug = (props) => {
   const [blog, setblog] = useState(props.myBLog);
console.log(blog);
   return <main className={styles.main}>
      <div className={styles.blog}>
         <div className={styles.blogItem}>
            <h1>{blog && blog.slug}</h1>
            <hr />
            <h3>{blog && blog.url}</h3>
            <p>{blog && blog.description}</p>
         </div>
      </div>
   </main>
}

export async function getServerSideProps() {
   return {
     paths: [
        { params: { slug : "ANGULAR" } },
      { params: { slug :"NEXTJS" } }, 
      { params: { slug :"REACT" } }, 
      { params: { slug :"Vue.js" } }, 

   ],
     fallback: true, // can also be true or 'blocking'
   }
 }



export async function getServerSideProps(context) {

  const { slug } = context.params
  console.log(slug);
let myBLog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
 return { props: { myBLog : JSON.parse(myBLog) } }
 
}

export default Slug
