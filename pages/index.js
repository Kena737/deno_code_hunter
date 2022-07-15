import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Deno Code Hunter - Hunt for a code, bug </title>
        <meta name="description" content="Welcome to Deno Hunting code hunt for a bug, sample code, awosome usefull javascript funtions" />
        <link rel="icon" href="#avicon.ico" />
      </Head>
      
      <nav className={styles.navbar}>
        <ul>
          <Link href="/"><a><li>Home</li></a></Link>
          <Link href="/blog"><a><li>Blogs</li></a></Link>
          <Link href="/about"><a><li>About</li></a></Link>
          <Link href="/contact"><a><li>Contact</li></a></Link>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/">Deno</a> Hunting Code
        </h1>

        <div className={styles.grid}>
          
          <a href="/" className={styles.card}>
            <Image className={styles.rounded_lg} src={"https://bit.ly/3Rr8bUW"} loading='lazy' width={300} height={220} objectFit={'cover'} />
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="/" className={styles.card}>
            <Image className={styles.rounded_lg} src={"https://bit.ly/3yH5GFo"} loading='lazy' width={300} height={220} objectFit={'cover'} />
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

          <a href="/" className={styles.card}>
            <Image className={styles.rounded_lg} src={"https://bit.ly/3cgofcc"} loading='lazy' width={300} height={220} objectFit={'cover'} />
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
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <Link>
          Powered by{' '}
          <span className={styles.logo}>
            <Image className={styles.rounded_lg} src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </Link>
      </footer> */}
    </div>
  )
}
