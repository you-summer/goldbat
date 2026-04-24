"use client";

import Link from "next/link";
import style from "./header.module.css";
import { useEffect, useState } from "react";
import { navBar } from "@/constants/navBar";
import NavIcon from "@/components/NavIcon";

export default function Header() {
  const [isEnter, setIsEnter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (y > 700 && y < 1600) {
        setIsEnter(true); // content2 영역
      } else {
        setIsEnter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${style.nav} ${isEnter ? style.black : ""}`}>
      {navBar.map((item) => {
        return (
          <Link href={item.url} key={item.id}>
            <NavIcon type={item.icon} isEnter={isEnter} />
          </Link>
        );
      })}
    </header>
  );
}
