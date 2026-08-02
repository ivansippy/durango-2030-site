"use client";

import { useRef } from "react";
import { grotesk } from "../fonts";
import type { NewsArticle } from "../lib/news";

export default function NewsCarousel({ articles }: { articles: NewsArticle[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (articles.length === 0) return null;

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {articles.map((article) => (
          <a
            key={article.link}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="snap-start shrink-0 w-72 sm:w-80 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 hover:bg-white/20 transition-colors flex flex-col"
          >
            <p
              className={`${grotesk.className} text-white/60 text-xs uppercase tracking-widest mb-3`}
            >
              {[
                article.source,
                new Date(article.pubDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }),
              ]
                .filter(Boolean)
                .join(" · ")}
            </p>
            <h3
              className={`${grotesk.className} text-white font-semibold text-lg leading-snug`}
            >
              {article.title}
            </h3>
            <span
              className={`${grotesk.className} mt-auto pt-4 text-red-500 text-sm font-medium`}
            >
              Read article &rarr;
            </span>
          </a>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Previous articles"
          className="bg-white/10 border border-white/15 rounded-full w-10 h-10 flex items-center justify-center text-white text-xl hover:bg-white/20 transition-colors"
        >
          &lsaquo;
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Next articles"
          className="bg-white/10 border border-white/15 rounded-full w-10 h-10 flex items-center justify-center text-white text-xl hover:bg-white/20 transition-colors"
        >
          &rsaquo;
        </button>
      </div>
    </div>
  );
}
