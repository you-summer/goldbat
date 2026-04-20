import Header from "@/components/Header/Header";
import FadeFramerMotion from "@/components/FadeFramerMotion";
import style from "./page.module.css";
import CommentBox from "./components/CommentBox";
import Image from "next/image";
import Obok from "./components/Obok";
import BubbleMenu from "./components/BubbleMenu";

const items = [
  {
    label: "home",
    href: "#",
    ariaLabel: "Home",
    rotation: -8,
    hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
  },
  {
    label: "about",
    href: "#",
    ariaLabel: "About",
    rotation: 8,
    hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
  },
  {
    label: "projects",
    href: "#",
    ariaLabel: "Projects",
    rotation: 8,
    hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
  },
  {
    label: "blog",
    href: "#",
    ariaLabel: "Blog",
    rotation: 8,
    hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
  },
  {
    label: "contact",
    href: "#",
    ariaLabel: "Contact",
    rotation: -8,
    hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
  },
];

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
          <BubbleMenu
            logo={<span style={{ fontWeight: 700 }}>버튼!!!</span>}
            items={items}
            menuAriaLabel="Toggle navigation"
            menuBg="#ffffff"
            menuContentColor="#111111"
            useFixedPosition={false}
            animationEase="back.out(1.5)"
            animationDuration={0.5}
            staggerDelay={0.12}
          />
        </div>

        <div>
          <p className={style.description}>
            댓글을 남기고 <br />
            황금이 가지는 불멸의 기운과 <br />
            오복(장수, 부귀, 강녕, 유호덕, 고종명)의 기운을 <br />
            받아보세요!
          </p>
        </div>

        {/* 댓글 */}

        <div className={style.comment}>
          <CommentBox />
        </div>
      </div>
    </div>
  );
}
