"use client";

import { navBar } from "@/constants/navBar";
import NavIcon from "./NavIcon";
import Link from "next/link";
import style from "./Header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  // 현재의 주소값이 들어가있음

  console.log(pathName);

  return (
    <div className={style.container}>
      <div className={style.navSection}>
        {navBar.map((item) => {
          const isActive = pathName === item.url;
          return (
            <Link
              className={`${style.nav} ${item.id} ${isActive ? style.active : ""}`}
              href={item.url}
              key={item.id}
            >
              <NavIcon type={item.icon} isEnter={false} />
            </Link>
          );
        })}
      </div>

      <div>날씨</div>
    </div>
  );
}
