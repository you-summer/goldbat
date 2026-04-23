"use client";

import { useState } from "react";
import styles from "./CommentBox.module.css";
import CommentItem from "./CommentItem";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function CommentBox() {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (!comment.trim()) return;

    alert("따봉 완료 👍");
    setComment("");
    addComment(comment);
  };

  // 댓글 추가
  const addComment = async (comment: string) => {
    await addDoc(collection(db, "comment"), {
      content: comment,
      createdAt: new Date(),
    });
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
