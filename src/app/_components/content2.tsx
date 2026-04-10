import FadeFramerMotion from "@/components/FadeFramerMotion";
import style from "./content2.module.css";

export default function Content2() {
  return (
    <div className={style.container}>
      <FadeFramerMotion>
        <div className={style.textContent}>
          <div>
            오늘의
            <div className={style.goldBatText}>황금박쥐상</div>
          </div>
          <div>시세는?</div>
        </div>
      </FadeFramerMotion>
    </div>
  );
}
