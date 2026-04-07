"use client";

import LightRays from "@/components/LightRays";
import Image from "next/image";
import style from "./page.module.css";
import SplitText from "../components/SplitText";

export default function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
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
          <SplitText
            text="황금"
            className={style.gold}
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
            // showCallback
          />

          <SplitText
            text="박쥐"
            className={style.bat}
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
            // showCallback
          />
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
