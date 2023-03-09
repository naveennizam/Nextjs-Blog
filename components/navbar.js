import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <nav className={styles.mainnav}>
        <ul>
          <Link href={'/'}> <li>Home</li> </Link>
          <Link href={'/about'}> <li>About</li> </Link>
          <Link href={'/blog'}> <li>Blog</li> </Link>
          <li> <Link href={'/contact'}> Contact </Link> </li>
         
        </ul>
      </nav>
    </>
  )
}

export default Navbar