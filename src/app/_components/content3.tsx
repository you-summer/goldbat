"use client";
import { Element } from "react-scroll";
import style from "./content3.module.css";

export default function Content3() {
  return (
    <Element name="chartSection">
      <div className={style.container}>
        <div>여기가 차트섹션</div>
      </div>
    </Element>
  );
}
