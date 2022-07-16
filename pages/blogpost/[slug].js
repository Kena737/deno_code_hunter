import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'
import styles from '../../styles/Blogpost.module.css'
import blog from '../blog'


// next js router 
const slug = () => {
  const [blog, setBlog] = useState([]);
  const router = useRouter()
  useEffect(() => {
    if(!router.isReady) return 
    const {slug} = router.query
    // console.log("use effect is runing");
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
      return a.json();})
      .then((data) => {
        setBlog(data);
      });
    }, [router.isReady]);
    
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <Image className={styles.rounded_lg} src={"https://bit.ly/3yJJieO"} loading='lazy' width={900} height={300} objectFit={'cover'} />
        <h1>{blog.title}</h1>
        <div>
          <p className={styles.text_left}>{blog.content}</p>
        </div>
        <h2 className={styles.text_left}>Step: 1</h2>
        <p className={styles.text_center}>Sometimes it’s the smallest thing that makes a lasting impression. A single smart comment or a couple of small gestures can really impress a woman, while an offensive remark or a display of carelessness can utterly doom your chances. A woman will decide relatively quickly whether or not you’re date-worthy, and all the little things you do or don’t do will help her make up her mind.</p>
      </main>
    </div>
  )
}

export default slug
