"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame: number | null = null;

    const updateProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      const next = total > 0 ? Math.min(100, (scrollTop / total) * 100) : 0;
      setProgress(next);
      frame = null;
    };

    const onScroll = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#4A7C59] via-[#D4A843] to-[#2D5A3D] transition-[width] duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
