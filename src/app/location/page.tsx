import Header from "@/components/Header";
import style from "./page.module.css";
import KakaoMap from "./_components/KakaoMap";
import CopyButton from "./_components/copy-button";
import Link from "next/link";

export default function Page() {
  const address =
    "전남 함평군 함평읍 함장로 1160, 함평엑스포공원(추억공작소내 황금박쥐전시관)";
  return (
    <div className={style.container}>
      <Header />

      <div className={style.content}>
        <div className={style.title}>찾아오시는 길</div>

        <div className={style.map}>
          <KakaoMap />
        </div>
        <div className="flex gap-2">
          <div>
            <Link
              href={"https://map.kakao.com/?itemId=913490663"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              카카오맵
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>
          <div className="flex gap-10">
            <Link
              href={
                "https://map.naver.com/p/entry/place/17136845?c=17.10,0,0,0,dh&placePath=/home?from=map&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202604141940&locale=ko&svcName=map_pcv5&fromPanelNum=1&additionalHeight=76&timestamp=202604141940&locale=ko&svcName=map_pcv5"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              네이버지도
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className={style.info}>
          <div className={style.infoTitle}>📍 위치</div>
          <CopyButton data={address} />
          <div className={style.infoTitle}>🕘 관람 시간</div>
          <div>09:00 ~ 18:00 </div>
          <div className={style.infoTitle}>⛔ 휴관</div>
          <div>매주 월요일</div>
          <div>축제기간 중에는 휴관일 상관없이 상시 운영</div>
          <div className={style.infoTitle}>🍴 휴게시간</div>
          <div>12:00 ~ 13:00</div>
        </div>
      </div>
    </div>
  );
}
