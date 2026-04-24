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

        <FadeFramerMotion>
          <div>
            <div className="flex-ro flex items-center py-50 text-2xl">
              <span className="px-3 text-4xl text-yellow-300">[</span>따봉
              황금박쥐야 고마워!
              <span className="px-3 text-4xl text-yellow-300">]</span>
            </div>
          </div>
        </FadeFramerMotion>

        <FadeFramerMotion>
          <div className={style.description}>
            <div className="text-6xl">댓글을 남기고</div>
            <div className="text-5xl">
              황금이 가지는{" "}
              <span className="py-0.4 rounded-2xl bg-red-500 px-2 text-white">
                불멸의 기운
              </span>
              과
            </div>
            <div className="text-6xl">
              <span className="rounded-2xl bg-yellow-400 px-1 text-white">
                오복
              </span>
              의 기운을
            </div>
            <div className="text-6xl">받아보세요!</div>
          </div>
        </FadeFramerMotion>

        <div className={style.obok}>
          <div className="pb-4 text-xl">오복이란?</div>
          <ObokBubble />
        </div>

        {/* 댓글 */}
        <div className={`${style.comment} flex justify-center pb-24`}>
          <CommentBox />
        </div>
      </div>
    </div>
  );
}
