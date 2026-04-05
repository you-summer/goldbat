import LightRays from "@/components/LightRays";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      {/* 배경 효과 */}
      <LightRays
        className="absolute inset-0 z-0"
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        pulsating={false}
        fadeDistance={1}
        saturation={1}
      />

      <div>황금 박쥐</div>

      {/* 이미지 */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <Image
          src="/goldBat.png"
          alt="황금 박쥐 이미지"
          width={1500}
          height={500}
          className="h-auto w-full max-w-[1200px]"
        />
      </div>
    </div>
  );
}
