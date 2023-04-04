// ./frontend/pages/post/[slug].tsx
import Image from 'next/image'
import client from '../../client'
import styles from '../../styles/BlogPost.module.css'
import imageUrlBuilder from '@sanity/image-url'
import groq from 'groq'

const query = groq`*[_type == "post" && slug.current == $slug][0]{ _id, title, slug, mainImage, body}`;

// Prepare Next.js to know which routes already exist
export const getStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`
  );

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const queryParams = { slug: params?.slug ?? `` };

  const post = await client.fetch(query, queryParams);

  return {
    props: {
      post
    },
  };
};



const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const Post = ({ post }) => {
  function createMarkup() {
    const bodyText = post.body.map(block => block.children.map(child => child.text).join('')).join('');
    return { __html: bodyText };
  }

  console.log(post)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image className={styles.rounded_lg} alt="image" src={urlFor(post.mainImage).width(900).height(500).url()} lo ading='lazy' width={900} height={500} objectFit={'cover'} />
        <h1>{post.title}</h1>
        <div className={styles.center} dangerouslySetInnerHTML={createMarkup()}></div>
      </main>
    </div>
  )
}

export default Post