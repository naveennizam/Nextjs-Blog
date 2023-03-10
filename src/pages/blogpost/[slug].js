import React from 'react'   // Dynamic Routing
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css';
import * as fs from "fs"
const Slug = (props) => {
   const [blog, setblog] = useState(props.myBLog);
   // const router = useRouter(); //  managing client-side routing and accessing browser history.
   // useEffect(() => {
   //    if (!router.isReady) return;
   //    const { slug } = router.query; // Dynamic Routes which use params
   //    // fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
   //    fetch(`/api/getblog?slug=${slug}`).then((a) => { return a.json(); })
   //       .then((data) => {
   //          setblog(data);
   //       })
   // }, [router.isReady]);
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

export async function getStaticPaths() {
   return {
     paths: [
      { params: { slug :"NEXTJS" } }, 
      { params: { slug : "flask" } }
   ],
     fallback: false, // can also be true or 'blocking'
   }
 }

export async function getStaticProps(context) {
   const { slug } = context.params
   // let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)

   let  myBLog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')

   return { props: { myBLog : JSON.parse(myBLog) } }

}
export default Slug