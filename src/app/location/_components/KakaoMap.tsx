"use client";

import { useEffect, useRef } from "react";

export default function KakaoMap() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    // 스크립트를 동적으로 로드하기 위해 autoload=false 파라미터 사용
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.async = true;
    // 스크립트를 비동기로 로드해라

    script.onload = () => {
      window.kakao.maps.load(() => {
        // const mapContainer = document.getElementById("container"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.402054, 127.108209), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        const map = new window.kakao.maps.Map(container.current, mapOption);
        // 📍 마커 생성
        new window.kakao.maps.Marker({
          map: map,
          position: new window.kakao.maps.LatLng(37.402054, 127.108209),
        });
      });
    };
  }, [container]);

  return (
    <div>
      <div>지도지도</div>
      <div ref={container} style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
}
