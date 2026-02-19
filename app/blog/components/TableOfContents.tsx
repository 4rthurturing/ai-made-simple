"use client";

import { useState } from "react";

type Heading = {
  id: string;
  text: string;
};

type Props = {
  headings: Heading[];
};

export default function TableOfContents({ headings }: Props) {
  const [open, setOpen] = useState(false);

  if (headings.length === 0) return null;

  return (
    <div className="glass-card rounded-card p-5 lg:p-6">
      <div className="flex items-center justify-between lg:hidden">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4A7C59]">
          On this page
        </p>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="text-sm font-semibold text-[#2D5A3D]"
        >
          {open ? "Hide" : "Show"}
        </button>
      </div>

      <div className={`${open ? "mt-4" : "hidden"} lg:mt-0 lg:block`}>
        <p className="hidden text-sm font-semibold uppercase tracking-[0.2em] text-[#4A7C59] lg:block">
          On this page
        </p>
        <ul className="mt-4 space-y-3 text-sm text-[#3D4A44]">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className="block rounded-lg px-3 py-2 transition hover:bg-white/70 hover:text-[#1E3D29]"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
