"use client";

import { useState } from "react";
import styles from "./CommentBox.module.css";
import CommentItem from "./CommentItem";
import { addComment } from "@/lib/firebaseDB";

export default function CommentBox() {
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    if (!comment.trim()) {
      alert("내용을 입력해주세요!");
      return;
    }

    try {
      await addComment(comment);
      alert("따봉 완료 👍");
      setComment("");
    } catch (e) {
      alert("에러 발생");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <textarea
          className={styles.textarea}
          value={comment}
          placeholder="따봉 황금박쥐야 고마워!"
          onChange={(e) => setComment(e.target.value)}
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
