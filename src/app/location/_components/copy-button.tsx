"use client";

import { useState } from "react";
import style from "./copy-button.module.css";

export default function CopyButton({ data }: { data: string }) {
  console.log("CopyButton 렌더됨");
  const [copied, setCopied] = useState(false);
  const onClickCopy = async () => {
    try {
      await navigator.clipboard.writeText(data);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (err) {
      console.error("복사 실패", err);
    }
  };

  return (
    <div className={style.container}>
      <div>{data}</div>
      <button onClick={onClickCopy}>{copied ? "복사완료!" : "복사"}</button>
    </div>
  );
}
