"use client";

import { useState } from "react";
import styles from "./CommentBox.module.css";

export default function CommentBox() {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (!comment.trim()) return;

    alert("따봉 완료 👍");
    setComment("");
  };

  return (
    <div className={styles.wrapper}>
      <textarea
        className={styles.textarea}
        placeholder="따봉 한마디 남기기..."
        value={"따봉 황금박쥐야 고마워!"}
        onChange={(e) => setComment(e.target.value)}
        readOnly
      />

      <button className={styles.button} onClick={handleSubmit}>
        보내기
      </button>
    </div>
  );
}
