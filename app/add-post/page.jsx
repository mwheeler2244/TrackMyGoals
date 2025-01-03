"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./post.module.css";

export default function UserPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [genre, setGenre] = useState("");

  const router = useRouter();

  async function handleForm(e) {
    e.preventDefault();

    try {
      await fetch("api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, genre }),
      });
      router.refresh();
    } catch (error) {
      console.error(error);
    }
    setTitle("");
    setContent("");
    setGenre("");
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleForm}>
        <div className={styles.inputWrapper}>
          <label htmlFor="title" className={styles.inputLabel}>
            Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.inputField}
            placeholder="Enter goal title"
          />
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="content" className={styles.inputLabel}>
            Content
          </label>
          <input
            type="text"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.inputField}
            placeholder="Enter goal content"
          />
          <select
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)} // Handle genre change
            className={styles.inputField}
          >
            <option value="">Select Genre</option>
            <option value="work">Work</option>
            <option value="fitness">Fitness</option>
            <option value="financial">Financial</option>
          </select>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
