"use client";

import Link from "next/link";
import style from "./Nav.module.css";
import { navBar } from "@/constants/navBar";
import { usePathname } from "next/navigation";
import NavIcon from "../NavIcon";

export default function Nav() {
  const pathName = usePathname();
  // 현재의 주소값이 들어가있음
  return (
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
  );
}
