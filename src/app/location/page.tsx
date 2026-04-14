import Header from "@/components/Header";
import style from "./page.module.css";
import KakaoMap from "./_components/KakaoMap";

export default function Page() {
  return (
    <div className={style.container}>
      <Header />

      <div className={style.content}>
        <div className={style.title}>현재 어디에 있나요?</div>
        <div className={style.map}>
          <KakaoMap />
        </div>
        <div>운영시간</div>
      </div>
    </div>
  );
}
