"use client";

import { useEffect } from "react";

export default function GoogleAnalyticsLoader() {
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "accepted") {
      const GA_ID = "G-4MS4297N30";
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", GA_ID);
    }
  }, []);

  return null;
}
