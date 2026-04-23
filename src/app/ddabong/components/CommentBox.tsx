"use client";

import { useEffect, useState } from "react";
import styles from "./CommentBox.module.css";
import CommentItem from "./CommentItem";
import { addComment, getComment } from "@/lib/firebaseDB";
import { Comment } from "@/types";

export default function CommentBox() {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState<Comment[]>([]);

  const handleSubmit = async () => {
    if (!comment.trim()) {
      alert("내용을 입력해주세요!");
      return;
    }

    try {
      await addComment(comment);
      alert("따봉 완료 👍");
      setComment("");

      const data = await getComment();
      console.log("🔥 가져온 데이터", data);
      setCommentList(data);
    } catch (e) {
      alert("에러 발생");
    }
  };

  useEffect(() => {
    const commentList = async () => {
      const comment = await getComment();
      setCommentList(comment);
    };
    commentList();
  }, [comment]);

  console.log("댓글리스트?", commentList);

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
