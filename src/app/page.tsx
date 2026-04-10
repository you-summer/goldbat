"use client";

import style from "./page.module.css";
import Content2 from "./_components/content2";
import Content1 from "./_components/content1";
import Header from "./_components/header";
import Content3 from "./_components/content3";
import { useRef } from "react";
import DownArrowButton from "./_components/down-arrow-button";

export default function Home() {
  return (
    <div className={style.container}>
      <Content1 />
      <Header />
      <Content2 />
      <DownArrowButton />
      <Content3 />
    </div>
  );
}
