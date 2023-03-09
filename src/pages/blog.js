import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { useEffect, useState } from "react";
import styles from '@/styles/Home.module.css'

const Blog = () => {

  const [blog, setblog] = useState([]);
  useEffect(() => {
    console.log(`it's running`);
    fetch("http://localhost:3000/api/blogging").then((a) => {
      return a.json();
    })
      .then((data) => {
        console.log(data);
        setblog(data);
      })
  }, []);

  return <main className={styles.main}>
    <div className={styles.blog}>
      {blog.map((blogitem) => {

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

export default Blog