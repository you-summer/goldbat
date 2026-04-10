"use client";

import style from "./page.module.css";
import Content2 from "./_components/content2";
import Content1 from "./_components/content1";
import Header from "./_components/header";
import { useState } from "react";

export default function Home() {
  const [isEnter, setIsEnter] = useState(false);

  return (
    <div className={style.container}>
      <Content1 />
      <Header isEnter={isEnter} />
      <Content2
        onEnter={() => setIsEnter(true)}
        onLeave={() => setIsEnter(false)}
      />
    </div>
  );
}
