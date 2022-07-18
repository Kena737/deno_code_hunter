import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

// use the fetch use in useEffect
const blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);
  return (
    <>
      <main className={styles.main}>
      <h1>Latest post &rarr;</h1>
        <div className={styles.grid}>
          {blogs.map((blogitem) => {
            return <Link href={`/blogpost/${blogitem.slug}`} key={blogitem.slug}>
                  <a className={styles.card}>
                    <Image className={styles.rounded_lg} src={blogitem.image} loading="lazy" width={300} height={230} objectFit={"cover"}/>
                    <h2>{blogitem.title} &rarr;</h2>
                    <p>{blogitem.description.substr(0,58)}..</p>
                  </a>
                </Link>
          })}
          </div>
      </main>

    </>
    );
    
  }
  export async function getServerSideProps(context) {
    const data = await fetch("http://localhost:3000/api/blogs");
    const allBlogs = await data.json();
    return { 
      props: {allBlogs}, // will be passed to the page component as props
    };
  }
  export default blog;

