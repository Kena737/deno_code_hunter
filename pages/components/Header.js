import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'


const Header = () => {
  return (
      <nav className={styles.navbar}>
        <ul>
          <Link href="/"><a><li>Home</li></a></Link>
          <Link href="/blog"><a><li>Blogs</li></a></Link>
          <Link href="/about"><a><li>About</li></a></Link>
          <Link href="/contact"><a><li>Contact</li></a></Link>
        </ul>
      </nav>
  )
}

export default Header
