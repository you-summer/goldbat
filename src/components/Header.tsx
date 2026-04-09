"use client";

import Link from "next/link";
import style from "./Header.module.css";

export default function Header() {
  return (
    <div className={`${style.nav}`}>
      <Link href={"/"}>Home</Link>
      <Link href={"/location"}>지도</Link>
      <Link href={"/contact"}>컨택</Link>
      <Link href={"/ddabong"}>따봉</Link>
    </div>
  );
}
