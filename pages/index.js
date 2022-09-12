import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Blog from "../models/Blog"
import mongoose from 'mongoose'
import styles from '../styles/Home.module.css'

export default function Home({ Dblog }) {
  return (
    <>

      <div className={styles.container}>
        <Head>
          <title>Deno Code Hunter - Hunt for a code, bug </title>
          <meta name="description" content="Welcome to Deno Hunting code hunt for a bug, sample code, awosome usefull javascript funtions" />
          <link rel="icon" href="#avicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1>Latest post &rarr;</h1>
          <div className={styles.grid}>
            {Object.keys(Dblog).map((blogitem) => {
              return <Link href={`/blogpost/${Dblog[blogitem].slug}`} key={Dblog[blogitem].slug}>
                <a className={styles.card}>
                  <Image className={styles.rounded_lg} alt="Hello" src={Dblog[blogitem].image} loading="lazy" width={300} height={230} objectFit={"cover"} />
                  <h2>{Dblog[blogitem].title} &rarr;</h2>
                  <p>{Dblog[blogitem].description.slice("0", "80")}..</p>
                </a>
              </Link>
            })}
          </div>
        </main>
      </div>
    </>
  )

}
export async function getServerSideProps(context) {
  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONDO_URI)
  }
  const Dblog = await Blog.find()

  // return props with blog
  return {
    props: {
      Dblog: JSON.parse(JSON.stringify(Dblog))
    }
  }
}

