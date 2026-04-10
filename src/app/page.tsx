"use client";

import style from "./page.module.css";
import Content2 from "./_components/content2";
import Content1 from "./_components/content1";
import Header from "./_components/header";
import { useState } from "react";
import Content3 from "./_components/content3";

export default function Home() {
  // const [isEnter, setIsEnter] = useState(false);

  return (
    <div className={style.container}>
      <Content1 />
      {/* isEnter={isEnter} */}
      <Header />
      <Content2
      // onEnter={() => setIsEnter(true)}
      // onLeave={() => setIsEnter(false)}
      />
      <Content3 />
    </div>
  );
}
