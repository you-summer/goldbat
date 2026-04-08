"use client";

import LightRays from "@/components/LightRays";
import Image from "next/image";
import style from "./page.module.css";
import SplitTextComponent from "@/components/split-text-component";
import FluidGlass from "@/components/FluidGlass";
// import FluidGlass from "./FluidGlass";

export default function Home() {
  const textItem = [
    { text: "황금", className: style.gold, delay: 200 },
    { text: "박쥐", className: style.bat, delay: 200 },
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

      <div style={{ height: "600px", position: "relative" }}>
        <FluidGlass
          mode="lens" // or "bar", "cube"
          lensProps={{
            scale: 0.25,
            ior: 1.15,
            thickness: 5,
            chromaticAberration: 0.1,
            anisotropy: 0.01,
          }}
          barProps={} // add specific props if using bar mode
          cubeProps={} // add specific props if using cube mode
          mode="bar"
          scale={0.1}
          ior={1.2}
          thickness={10}
          transmission={1}
          roughness={0.2}
          chromaticAberration={0.21}
          anisotropy={0.01}
        />
      </div>
    </div>
  );
}
