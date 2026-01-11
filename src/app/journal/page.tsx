"use client";

import { useEffect, useState } from "react";

interface JournalEntry {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  creator?: string;
  isCrosspost?: boolean;
  originalSource?: string;
}

export default function Journal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRSSFeed() {
      try {
        const response = await fetch("/api/substack-feed");
        const data = await response.json();
        setEntries(data.items);
      } catch (error) {
        console.error("Failed to fetch RSS feed:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchRSSFeed();
  }, []);

  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-2xl">
        <div className="flex justify-between items-baseline mb-8">
          <h1 className="text-lg">journal</h1>
          <a
            href="https://seanthorconroe.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
          >
            subscribe on substack →
          </a>
        </div>

        {isLoading ? (
          <div className="space-y-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="border-b border-border pb-8 animate-pulse">
                <div className="h-3 w-24 bg-muted mb-2" />
                <div className="h-5 w-3/4 bg-muted mb-2" />
                <div className="h-3 w-full bg-muted" />
                <div className="h-3 w-2/3 bg-muted mt-1" />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {entries.map((entry) => (
              <article key={entry.link} className="border-b border-border pb-8">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <time>
                    {new Date(entry.pubDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }).toLowerCase()}
                  </time>
                  {entry.isCrosspost && entry.originalSource && (
                    <span className="text-muted-foreground/70">
                      · crosspost from {entry.originalSource}
                    </span>
                  )}
                </div>
                <h2 className="text-base mt-1 mb-2">
                  <a
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline hover:underline"
                  >
                    {entry.title.toLowerCase()}
                  </a>
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {entry.description}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
