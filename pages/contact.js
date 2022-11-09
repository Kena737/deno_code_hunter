import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      Phone,
      email,
      message,
    };

    fetch("http://localhost:3000/api/postContact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },})
      .then((res) => res.text())
      .then((data) => {
        console.log("Success: " + data );
        alert("Message sent successfully");
        setEmail("");
        setName("");
        setPhone("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
        alert("Message failed to send");
      });
  }

  const handleChange = (e) => { 
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
      console.log(name, value);
      
    } else if (name === "phone") {
      setPhone(value);
      console.log(name, value);
      
    } else if (name === "email") {
      setEmail(value);
      console.log(name, value);
      
    } else if (name === "message") {
      setMessage(value);
      console.log(name, value);
    }
  }

  return (
    // contact page with email, name and phone number
    <div className={styles.container}>
      <h1>Contact</h1>
      <form action="" method="post">
        <div className={styles.mb_3}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.input_box}
            type="text"
            onChange={handleChange}
            name="name"
            id="name"
          />
        </div>

        <div className={styles.mb_3}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input_box}
            type="email"
            onChange={handleChange}
            name="email"
            id="email"
          />
        </div>

        <div className={styles.mb_3}>
          <label className={styles.label} htmlFor="phone">
            Phone
          </label>
          <input
            className={styles.input_box}
            type="text"
            onChange={handleChange}
            name="phone"
            id="phone"
          />
        </div>

        <div className={styles.mb_3}>
          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            className={styles.input_box}
            type="text"
            onChange={handleChange}
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button className={styles.btn} type="submit" onClick={handleSubmit}>Send</button>
      </form>
    </div>
  );
};

export default Contact;
