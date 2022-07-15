import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const blog = () => {
  return (
    <>
    <main className={styles.main}>

        <h1>Latest post &rarr;</h1>
        <div className={styles.grid}>

          <Link href="/blogpost/Documentation">
            <a className={styles.card}>
              <Image className={styles.rounded_lg} src={"https://bit.ly/3Rr8bUW"} loading='lazy' width={300} height={220} objectFit={'cover'} />
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>

          <a href="/" className={styles.card}>
            <Image className={styles.rounded_lg} src={"https://bit.ly/3yH5GFo"} loading='lazy' width={300} height={220} objectFit={'cover'} />
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="/" className={styles.card}>
            <Image className={styles.rounded_lg} src={"https://bit.ly/3cceOdE"} loading='lazy' width={300} height={220} objectFit={'cover'} />
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="/" className={styles.card}>
            <Image className={styles.rounded_lg} src={"https://bit.ly/3PrlFON"} loading='lazy' width={300} height={220} objectFit={'cover'} />
            <h2>Explore New Things &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="/" className={styles.card}>
            <Image className={styles.rounded_lg} src={"https://bit.ly/3cgofcc"} loading='lazy' width={300} height={220} objectFit={'cover'} />
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="/" className={styles.card}>
            <Image className={styles.rounded_lg} src={"https://bit.ly/3cgofcc"} loading='lazy' width={300} height={220} objectFit={'cover'} />
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="/" className={styles.card}>
            <Image className={styles.rounded_lg} src={"https://bit.ly/3cgofcc"} loading='lazy' width={300} height={220} objectFit={'cover'} />
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="/" className={styles.card}>
            <Image className={styles.rounded_lg} src={"https://bit.ly/3cgofcc"} loading='lazy' width={300} height={220} objectFit={'cover'} />
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="/" className={styles.card}>
            <Image className={styles.rounded_lg} src={"https://bit.ly/3cgofcc"} loading='lazy' width={300} height={220} objectFit={'cover'} />
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="/" className={styles.card}>
              <Image className={styles.rounded_lg} src={"https://bit.ly/3cgofcc"} loading='lazy' width={300} height={220} objectFit={'cover'} />
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

        </div>
    </main>
    </>
  )
}

export default blog
