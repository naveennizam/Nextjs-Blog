import React from 'react'   // Dynamic Routing
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css';

const slug = () => {
   const [blog, setblog] = useState();
   const router = useRouter();
   useEffect(() => {
      if (!router.isReady) return;
      const { slug } = router.query;
      fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
         return a.json();
      })
         .then((data) => {
            setblog(data);
         })
   }, [router.isReady])
   return <main className={styles.main}>
      <div className={styles.blog}>
         <div className={styles.blogItem}>
            <h1>{blog && blog.title}</h1>
            <hr />
            <h3>{blog && blog.url}</h3>
            <p>{blog && blog.description}</p>
         </div>
      </div>
   </main>
}
export default slug