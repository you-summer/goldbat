"use client";

import SplitText from "./SplitText";

type Props = {
  item: { text: string; className: string };
};

export default function SplitTextComponent({ item }: Props) {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      <SplitText
        text={item.text}
        className={item.className}
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
    </>
  );
}
