import LightRays from "@/components/LightRays";
import SplitTextComponent from "@/components/split-text-component";
import Image from "next/image";
import style from "./content1.module.css";

export default function Content1() {
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
            src="/goldBat11.png"
            alt="황금 박쥐 이미지"
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  );
}
