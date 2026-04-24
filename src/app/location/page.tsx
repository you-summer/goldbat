import Header from "@/components/Header/Header";
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

        <div className="flex w-full gap-2">
          {[
            {
              label: "카카오맵",
              href: "https://map.kakao.com/?itemId=913490663",
              color: "#f9e000",
            },
            {
              label: "네이버지도",
              href: "https://map.naver.com/p/entry/place/17136845?c=17.10,0,0,0,dh&placePath=/home?from=map&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202604141940&locale=ko&svcName=map_pcv5&fromPanelNum=1&additionalHeight=76&timestamp=202604141940&locale=ko&svcName=map_pcv5",
              color: "#03c75a",
            },
          ].map(({ label, href, color }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:bg-gray-50"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: color }}
              />
              {label}
              <span className="text-xs opacity-40">↗</span>
            </Link>
          ))}
        </div>

        <div className={style.map}>
          <KakaoMap />
        </div>

        {/* <div className="flex gap-2">
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
        </div> */}

        <div className={style.info}>
          <div className={`${style.infoCard} ${style.wide}`}>
            <div className={style.infoLabel}>📍 위치</div>
            <CopyButton data={address} />
          </div>
          <div className={style.infoCard}>
            <div className={style.infoLabel}>🕘 관람 시간</div>
            <div className={style.infoValue}>09:00 – 18:00</div>
          </div>
          <div className={style.infoCard}>
            <div className={style.infoLabel}>🍴 휴게 시간</div>
            <div className={style.infoValue}>12:00 – 13:00</div>
          </div>
          <div className={`${style.infoCard} ${style.wide}`}>
            <div className={style.infoLabel}>⛔ 휴관</div>
            <div className={style.infoValue}>매주 월요일</div>
            <span className={style.infoBadge}>축제 기간 중 상시 운영</span>
          </div>
        </div>
      </div>
    </div>
  );
}
