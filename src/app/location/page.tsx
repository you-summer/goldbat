import Header from "@/components/Header";
import style from "./page.module.css";
import KakaoMap from "./_components/KakaoMap";

export default function Page() {
  return (
    <div className={style.container}>
      <Header />

      <div className={style.content}>
        <div className={style.left}> d</div>
        <div className={style.right}>
          <div className={style.title}>찾아가는 길</div>
          <div>
            지도자리
            <div id="map" className={style.map}>
              <KakaoMap />
            </div>
          </div>
          <div>운영시간</div>
        </div>
      </div>
    </div>
  );
}
