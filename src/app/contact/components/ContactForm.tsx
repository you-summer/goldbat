"use client";

import { useState } from "react";
import style from "./ContactFrom.module.css";
import { addMessage } from "@/lib/firebaseDB";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onClickSubmit = async () => {
    try {
      await addMessage({ email, message });
      setSubmitted(true);
    } catch (error) {
      console.error("문의 전송 실패:", error);
      alert("문의 전송에 실패했습니다. 다시 시도해주세요.");
    }
  };

  if (submitted) {
    return (
      <div className={style.successCard}>
        <div className={style.successIcon}>✓</div>
        <div className={style.successTitle}>문의가 접수되었습니다</div>
        <div className={style.successSub}>{email} 으로 답변 드릴게요</div>
        <button
          className={style.resetBtn}
          onClick={() => {
            setSubmitted(false);
            setEmail("");
            setMessage("");
          }}
        >
          다시 문의하기
        </button>
      </div>
    );
  }

  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <div className={style.cardTitle}>무엇이든 물어보세요</div>
        <div className={style.cardSub}>답변은 이메일로 드려요</div>
      </div>

      <div className={style.field}>
        <label className={style.label}>이메일</label>
        <input
          className={style.input}
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={style.field}>
        <label className={style.label}>문의 내용</label>
        <textarea
          className={style.textarea}
          placeholder="궁금한 점을 자유롭게 적어주세요"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
        />
      </div>

      <button
        className={style.submitBtn}
        disabled={!email || !message}
        onClick={onClickSubmit}
      >
        문의 보내기
      </button>
    </div>
  );
}
