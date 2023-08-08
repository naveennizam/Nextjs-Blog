import React from 'react'
import styles from '@/styles/Home.module.css'
const About = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.blogItem}>
          <h1>About this</h1>
          <hr />
          <br/><br/>
          <p>Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.
          <br/> <br/> We enable teams to iterate quickly and develop, preview, and ship delightful user experiences. Vercel has zero-configuration support for 35+ frontend frameworks and integrates with your headless content, commerce, or database of choice.</p>
        </div>
      </main>
    </>
  )
}

export default About