import style from "./page.module.css";
import Content2 from "./_components/content2";
import Content1 from "./_components/content1";
import Header from "./_components/header";
import Content3 from "./_components/content3";
import DownArrowButton from "./_components/down-arrow-button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "황금박쥐",
  description: "황금박쥐에 대한 정보를 만나보세요",
  openGraph: {
    title: "황금박쥐",
    description: "황금박쥐에 대한 정보를 만나보세요",
    images: ["/thumbnail.png"],
  },
};

export default function Home() {
  return (
    <div className={style.container}>
      <Content1 />
      <Header />
      <Content2 />
      <DownArrowButton />
      <div id="content3" className={style.content3}>
        <Content3 />
      </div>
    </div>
  );
}
