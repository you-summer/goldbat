"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

export default function FadeFramerMotion({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="show"
      transition={{
        // type: "spring",
        // stiffness: 200, // 높을수록 빠르고 탄력적
        // damping: 15, // 낮을수록 더 많이 튕김

        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
