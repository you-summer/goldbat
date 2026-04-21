"use client";

import React, { useState, useRef, useEffect, CSSProperties } from "react";
import { gsap } from "gsap";
import "./ObokBubble.css";

const OBOK_ITEMS = [
  {
    label: "장수",
    desc: "오래오래 건강하게 사는 복",
    rotation: -8,
    hoverBg: "#f59e0b",
    hoverColor: "#ffffff",
  },
  {
    label: "부귀",
    desc: "재물과 높은 지위를 누리는 복",
    rotation: 8,
    hoverBg: "#ef4444",
    hoverColor: "#ffffff",
  },
  {
    label: "강녕",
    desc: "몸과 마음이 편안하고 건강한 복",
    rotation: -8,
    hoverBg: "#10b981",
    hoverColor: "#ffffff",
  },
  {
    label: "유호덕",
    desc: "좋은 덕을 쌓아 사람들에게 사랑받는 복",
    rotation: 8,
    hoverBg: "#3b82f6",
    hoverColor: "#ffffff",
  },
  {
    label: "고종명",
    desc: "때가 되면 편안하게 생을 마치는 복",
    rotation: -8,
    hoverBg: "#8b5cf6",
    hoverColor: "#ffffff",
  },
];

export default function ObokBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [showItems, setShowItems] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<HTMLDivElement[]>([]);
  const labelRefs = useRef<HTMLSpanElement[]>([]);

  const handleToggle = () => {
    const next = !isOpen;
    if (next) setShowItems(true);
    setIsOpen(next);
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const pills = pillRefs.current.filter(Boolean);
    const labels = labelRefs.current.filter(Boolean);
    if (!overlay || !pills.length) return;

    if (isOpen) {
      gsap.set(overlay, { display: "flex" });
      gsap.killTweensOf([...pills, ...labels]);
      gsap.set(pills, { scale: 0, transformOrigin: "50% 50%" });
      gsap.set(labels, { y: 24, autoAlpha: 0 });

      pills.forEach((pill, i) => {
        const delay = i * 0.12 + gsap.utils.random(-0.05, 0.05);
        const tl = gsap.timeline({ delay });
        tl.to(pill, { scale: 1, duration: 0.5, ease: "back.out(1.5)" });
        if (labels[i]) {
          tl.to(
            labels[i],
            { y: 0, autoAlpha: 1, duration: 0.5, ease: "power3.out" },
            `-=${0.5 * 0.9}`,
          );
        }
      });
    } else if (showItems) {
      gsap.killTweensOf([...pills, ...labels]);

      // 라벨 먼저 사라지고
      gsap.to(labels, {
        y: -20,
        autoAlpha: 0,
        duration: 0.25,
        ease: "power3.in",
        stagger: { each: 0.05, from: "end" },
      });

      // pill이 순서 역방향으로 통통 튀며 사라짐
      gsap.to(pills, {
        scale: 0,
        rotation: 10,
        duration: 0.35,
        ease: "back.in(1.5)",
        stagger: { each: 0.08, from: "end" }, // ← 역방향 stagger
        onComplete: () => {
          gsap.set(overlay, { display: "none" });
          setShowItems(false);
        },
      });
    }
  }, [isOpen, showItems]);

  return (
    <>
      {/* 트리거 버튼 */}
      <button
        type="button"
        className={`obok-trigger ${isOpen ? "open" : ""}`}
        onClick={handleToggle}
        aria-label="오복 메뉴 열기"
        aria-pressed={isOpen}
      >
        🦇
      </button>

      {/* pill 오버레이 */}
      {showItems && (
        <div
          ref={overlayRef}
          className="bubble-menu-items"
          aria-hidden={!isOpen}
        >
          <ul className="pill-list" role="menu">
            {OBOK_ITEMS.map((item, idx) => (
              <li key={item.label} role="none" className="pill-col">
                <div
                  className="pill-link"
                  data-desc={item.desc}
                  style={
                    {
                      "--item-rot": `${item.rotation}deg`,
                      "--pill-bg": "#ffffff",
                      "--pill-color": "#111111",
                      "--hover-bg": item.hoverBg,
                      "--hover-color": item.hoverColor,
                    } as CSSProperties
                  }
                  ref={(el) => {
                    if (el) pillRefs.current[idx] = el;
                  }}
                >
                  <span
                    className="pill-label"
                    ref={(el) => {
                      if (el) labelRefs.current[idx] = el;
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
