import Image from 'next/image'
import React from 'react'
import styles from '../styles/About.module.css'

const about = () => {
  return (
    <div className={styles.container}>
      <div>
      <h1 className={styles.heading}>Welcome to About Page</h1>
      <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non veritatis dicta, Molestias non veritatis dicta,Molestias non veritatis dicta,Molestias non veritatis dicta, quia commodi quod.</p>
      <button className={styles.btn}>Contact now</button>
      </div>
      <div>
        <Image className={styles.rounded_lg} src={"https://bit.ly/3z6qRSM"} height={500} width={500} objectFit={"cover"}/>
      </div>

    </div>
  )
}

export default about
