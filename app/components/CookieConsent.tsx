"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    // Load Google Analytics
    loadGA();
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 p-4"
      style={{ backgroundColor: "#1E3D29" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-base text-white text-center sm:text-left">
          We use cookies to improve your experience.{" "}
          <Link href="/cookie-policy" className="underline font-semibold" style={{ color: "#E0B84D" }}>
            See our Cookie Policy
          </Link>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-6 font-semibold rounded-btn border-2 border-white text-white hover:bg-white hover:text-sage-700 transition-colors"
            style={{ minHeight: "48px", minWidth: "100px" }}
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-6 font-semibold rounded-btn text-white hover:opacity-90 transition-opacity"
            style={{ minHeight: "48px", minWidth: "100px", backgroundColor: "#4A7C59" }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

function loadGA() {
  if (typeof window === "undefined") return;
  const GA_ID = "G-4MS4297N30";

  // Load gtag script
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialise gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_ID);
}

// Extend window type for dataLayer
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
