"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./components.module.css"; // Assuming your CSS file is in the same folder

export default function DeletePost({ id }) {
  const router = useRouter();

  async function handleDelete() {
    try {
      const response = await fetch(`/api/delete/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the post");
      }

      // Optionally, you could push to a different page or refresh
      router.push("/dashboard"); // Redirect to a dashboard or home page after delete
    } catch (error) {
      console.error("Error deleting the post:", error);
      alert("Failed to delete the post");
    }
  }

  return (
    <button className={styles.deleteButton} onClick={handleDelete}>
      Delete
    </button>
  );
}
