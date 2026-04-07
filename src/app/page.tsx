"use client";

import LightRays from "@/components/LightRays";
import Image from "next/image";
import style from "./page.module.css";
import SplitTextComponent from "@/components/split-text-component";

export default function Home() {
  const textItem = [
    { text: "황금", className: style.gold, delay: 50 },
    { text: "박쥐", className: style.bat, delay: 100 },
  ];

  return (
    <div className={style.container}>
      {/* 배경 효과 */}
      <LightRays
        className="absolute inset-0 z-0"
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={2}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.2}
        noiseAmount={0}
        distortion={0}
        pulsating={false}
        fadeDistance={1}
        saturation={2}
      />

      <div className={style.test}>
        <div className={style.goldBatText}>
          {textItem.map((item, idx) => {
            return <SplitTextComponent key={idx} item={item} />;
          })}
        </div>

        {/* 이미지 */}
        <div className={style.goldBatImg}>
          <Image
            src="/goldBat.png"
            alt="황금 박쥐 이미지"
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
}
