"use client";
import React from "react";
import { useState } from "react";
import styles from "./components.module.css";

export default function Completed({ id }) {
  const [complete, setComplete] = useState(null);

  async function handleCompleted() {
    try {
      const response = await fetch(`/api/complete/${id}`, {
        method: "PUT",
      });

      if (!response.ok) {
        throw new Error("Failed to update the post");
      }

      setComplete((prev) => !prev);
    } catch (error) {
      console.error("Error deleting the post:", error);
      alert("Failed to complete the post");
    }
  }
  return (
    <>
      <button className={styles.completeButton} onClick={handleCompleted}>
        {!complete ? "Mark as Complete" : "Mark as Incomplete"}
      </button>
      {complete && (
        <p style={{ color: "green", fontSize: "1.5rem" }}>Completed!!!</p>
      )}
    </>
  );
}
