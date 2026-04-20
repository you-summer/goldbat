import Header from "@/components/Header/Header";
import FadeFramerMotion from "@/components/FadeFramerMotion";
import style from "./page.module.css";
import CommentBox from "./components/CommentBox";
import Image from "next/image";

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
        <p className={style.description}>
          댓글을 남기고 <br />
          황금이 가지는 불멸의 기운과 <br />
          오복(장수, 부귀, 강녕, 유호덕, 고종명)의 기운을 <br />
          받아보세요!
        </p>

        {/* 댓글 */}

        <div className={style.comment}>
          <CommentBox />
        </div>
      </div>
    </div>
  );
}
