import React from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/Blogpost.module.css'
// next js router 
const slug = () => {
const router = useRouter()
const {slug} = router.query
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title Of The Page {slug}</h1>
      </main>
    </div>
  )
}

export default slug
