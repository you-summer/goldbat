"use client";

import FadeFramerMotion from "@/components/FadeFramerMotion";
import style from "./content2.module.css";
import { useEffect, useRef } from "react";
import DownArrowButton from "./down-arrow-button";

export default function Content2({
  onEnter,
  onLeave,
}: {
  onEnter: () => void;
  onLeave: () => void;
}) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry = 감시 대상 요소의 상태 정보
        if (entry.isIntersecting)
          onEnter(); // 화면에 보이면
        else onLeave(); // 화면에서 벗어나면
      },
      { threshold: 0.9 }, // 요소의 30%가 보일 때 실행
    );

    if (ref.current) observer.observe(ref.current); // 감시 시작
    return () => observer.disconnect(); // 컴포넌트 사라지면 감시 중단
  }, []);

  return (
    <div ref={ref} className={style.container}>
      <FadeFramerMotion>
        <div className={style.textContent}>
          <div>
            오늘의
            <div className={style.goldBatText}>황금박쥐상</div>
          </div>
          <div>시세는?</div>
        </div>
      </FadeFramerMotion>
      <DownArrowButton />
    </div>
  );
}
