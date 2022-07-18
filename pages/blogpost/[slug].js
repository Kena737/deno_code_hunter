import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import styles from '../../styles/Blogpost.module.css'

const slug = (props) => {
  const [blog, setBlog] = useState(props.Blog);
  // const router = useRouter()
  // useEffect(() => {
  //   if(!router.isReady) return 
  //   const {slug} = router.query
  //   // console.log("use effect is runing");
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
  //     return a.json();})
  //     .then((data) => {
  //       setBlog(data);
  //     });
  //   }, [router.isReady]);

  function createMarkup () {
    return {__html: blog.content};
  }
    
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <Image className={styles.rounded_lg} src={blog.image} loading='lazy' width={900} height={500} objectFit={'cover'} />
        <h1>{blog.title}</h1>
        <div className={styles.center} dangerouslySetInnerHTML={createMarkup()}></div>
      </main>
    </div>
  )
}
export async function getServerSideProps(context) {
  const {slug} = context.query
  const data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`); // fetch the data from the api
  const Blog = await data.json(); // json() is a method of the response object
  return {
    props: {Blog},  // will be passed to the page component as props
  }
}


export default slug
