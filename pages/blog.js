import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

// use the fetch use in useEffect
const blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    // console.log("use effect is runing");
    fetch("http://localhost:3000/api/blogs").then((a) => {
      return a.json();})
      .then((data) => {
        // console.log(data);
        setBlogs(data);
      });
    }, []);
  return (
    <>
      <main className={styles.main}>
      <h1>Latest post &rarr;</h1>
        <div className={styles.grid}>
          {blogs.map((blogitem) => {
            return <Link href={`/blogpost/${blogitem.slug}`} key={blogitem.slug}>
                  <a className={styles.card}>
                    <Image className={styles.rounded_lg} src={blogitem.image} loading="lazy" width={300} height={220} objectFit={"cover"}/>
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
  export default blog;

