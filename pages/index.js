import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import Image from "next/image"
import styles from "../styles/Home.module.css";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const Index = ({ posts }) => {
  console.log("Hello" + posts)
  return (
    <>
      <main className={styles.main}>
        <h1>Latest post &rarr;</h1>
        <div className={styles.grid}>
          {posts.length > 0 &&
            posts.map(({ _id, title, slug, publishedAt, mainImage, body }) => slug && (
              <Link href={`/post/${encodeURIComponent(slug.current)}`} key={_id}>
                <div className={styles.card}>
                  <Image className={styles.rounded_lg} alt="Hello" src={urlFor(mainImage).width(300).height(230).url()} loading="lazy" width={300} height={230} objectFit={"cover"} />
                  <h2>{title.slice(0, 35)} &rarr;</h2>
                  {/* <p>{body}</p> */}
                </div>
              </Link>
            )
            )}
        </div>
      </main>

    </>
  )
}

export async function getStaticProps() {
  const query = groq`*[_type == "post" && defined(slug.current)]{ _id, title, slug, mainImage, body }`;
  const posts = await client.fetch(query);
  return {
    props: {
      posts
    }
  }
}

export default Index

