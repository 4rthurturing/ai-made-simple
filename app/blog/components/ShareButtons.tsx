"use client";

import { useState } from "react";

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window === "undefined" ? "" : window.location.href;
  const shareTitle = typeof document === "undefined" ? "" : document.title;

  const copyLink = async () => {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const openShare = (platform: "twitter" | "facebook") => {
    if (!shareUrl) return;
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    const url =
      platform === "twitter"
        ? `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
        : `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={copyLink}
        className="rounded-full border border-[#C9D8CC] bg-white/80 px-4 py-2 text-sm font-semibold text-[#2D5A3D] transition hover:border-[#4A7C59] hover:text-[#1E3D29]"
      >
        {copied ? "Link Copied" : "Copy Link"}
      </button>
      <button
        type="button"
        onClick={() => openShare("twitter")}
        className="rounded-full border border-[#C9D8CC] bg-white/80 px-4 py-2 text-sm font-semibold text-[#2D5A3D] transition hover:border-[#4A7C59] hover:text-[#1E3D29]"
      >
        Share to Twitter
      </button>
      <button
        type="button"
        onClick={() => openShare("facebook")}
        className="rounded-full border border-[#C9D8CC] bg-white/80 px-4 py-2 text-sm font-semibold text-[#2D5A3D] transition hover:border-[#4A7C59] hover:text-[#1E3D29]"
      >
        Share to Facebook
      </button>
    </div>
  );
}
