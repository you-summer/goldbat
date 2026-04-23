"use client";

import { useState } from "react";
import styles from "./CommentBox.module.css";
import CommentItem from "./CommentItem";

export default function CommentBox() {
  const [comment, setComment] = useState("따봉 황금박쥐야 고마워!");

  const handleSubmit = () => {
    if (!comment.trim()) return;

    alert("따봉 완료 👍");
    setComment("따봉 황금박쥐야 고마워!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <textarea
          className={styles.textarea}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          readOnly
        />

        <button className={styles.button} onClick={handleSubmit}>
          보내기
        </button>
      </div>
      <div className={styles.commentItem}>
        <CommentItem />
        <CommentItem />
      </div>
    </div>
  );
}
