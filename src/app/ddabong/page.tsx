import Header from "@/components/Header/Header";
import FadeFramerMotion from "@/components/FadeFramerMotion";
import style from "./page.module.css";
import CommentBox from "./components/CommentBox";
import Image from "next/image";
import ObokBubble from "./components/ObokBubble";

export default function Page() {
  return (
    <div className={style.container}>
      <Header />

      <div className={style.main}>
        <FadeFramerMotion>
          <div className={style.textContent}>
            <div className={style.text}>
              따봉 <span className={style.goldBatText}>황금박쥐</span>야
            </div>
            <div className={style.content2}>
              <Image
                src={"/황박이엄지척2.png"}
                alt="황금박쥐 엄지척"
                width={250}
                height={250}
              />

              <div>고마워!</div>
            </div>
          </div>
        </FadeFramerMotion>

        <div>
          <p className={style.description}>
            댓글을 남기고 <br />
            황금이 가지는 불멸의 기운과 <br />
            오복의 기운을 <br />
            받아보세요!
          </p>
        </div>

        <div>오복이란?</div>

        <div>
          <ObokBubble />
        </div>

        {/* 댓글 */}

        <div className={style.comment}>
          <CommentBox />
        </div>
      </div>
    </div>
  );
}
