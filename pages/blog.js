import Link from "next/link";
import Image from "next/image";
import Blog from "../models/Blog"
import styles from "../styles/Home.module.css";
import mongoose from "mongoose";
import React, { useEffect, useState } from "react";

// use the fetch use in useEffect
const blog = ({Dblog}) => {
  console.log(Dblog);
  return (
    <>
      <main className={styles.main}>
      <h1>Latest post &rarr;</h1>
        <div className={styles.grid}>
          {Object.keys(Dblog).map((blogitem) => {
            return <Link href={`/blogpost/${blogitem.slug}`} key={Dblog[blogitem].slug}>
                  <a className={styles.card}>
                    <Image className={styles.rounded_lg} alt="Hello" src={Dblog[blogitem].image} loading="lazy" width={300} height={230} objectFit={"cover"}/>
                    <h2>{Dblog[blogitem].title} &rarr;</h2>
                    <p>{Dblog[blogitem].description}..</p>
                  </a>
                </Link>
          })}
          </div>
      </main>
    </>
    );
    
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

  export default blog;

