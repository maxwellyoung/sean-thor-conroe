"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Episode {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  videoId: string;
}

export default function Podcast() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEpisodes() {
      try {
        const res = await fetch("/api/youtube-feed");
        if (!res.ok) throw new Error("Failed to fetch episodes");
        const data = await res.json();
        setEpisodes(data.episodes || []);
      } catch {
        setError("couldn't load episodes. check youtube directly.");
      } finally {
        setLoading(false);
      }
    }
    fetchEpisodes();
  }, []);

  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-3xl">
        <h1 className="text-lg mb-2">1storypod</h1>
        <p className="text-sm text-muted-foreground mb-8">
          weekly conversations on writing, art, and life.
        </p>

        <div className="flex gap-4 mb-12 text-sm">
          <a
            href="https://www.youtube.com/@1storypod"
            target="_blank"
            rel="noopener noreferrer"
          >
            youtube
          </a>
          <a
            href="https://www.patreon.com/1storypod"
            target="_blank"
            rel="noopener noreferrer"
          >
            patreon
          </a>
          <a
            href="https://open.spotify.com/show/1storypod"
            target="_blank"
            rel="noopener noreferrer"
          >
            spotify
          </a>
        </div>

        <section>
          <h2 className="text-xs text-muted-foreground mb-6 uppercase tracking-wider">
            recent episodes
          </h2>

          {loading && (
            <div className="space-y-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex gap-4 animate-pulse">
                  <div className="w-40 h-24 bg-muted shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-muted w-3/4" />
                    <div className="h-3 bg-muted w-1/2" />
                    <div className="h-3 bg-muted w-full" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <p className="text-sm text-muted-foreground">
              {error}{" "}
              <a
                href="https://www.youtube.com/@1storypod"
                target="_blank"
                rel="noopener noreferrer"
              >
                → go to youtube
              </a>
            </p>
          )}

          {!loading && !error && episodes.length === 0 && (
            <p className="text-sm text-muted-foreground">
              no episodes found.{" "}
              <a
                href="https://www.youtube.com/@1storypod"
                target="_blank"
                rel="noopener noreferrer"
              >
                → check youtube
              </a>
            </p>
          )}

          {!loading && !error && episodes.length > 0 && (
            <div className="space-y-8">
              {episodes.map((episode) => (
                <a
                  key={episode.id}
                  href={`https://www.youtube.com/watch?v=${episode.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 group no-underline hover:no-underline"
                >
                  <div className="w-40 h-24 relative shrink-0 border border-border overflow-hidden">
                    <Image
                      src={episode.thumbnail}
                      alt={episode.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm mb-1 group-hover:text-accent transition-colors line-clamp-2">
                      {episode.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">
                      {new Date(episode.publishedAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {episode.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>

        <section className="mt-16 pt-8 border-t border-border">
          <h2 className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
            about the show
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            1storypod is a podcast where writers, artists, and thinkers discuss
            their craft, creative processes, and the ideas that drive their
            work. hosted by sean thor conroe.
          </p>
        </section>
      </div>
    </div>
  );
}
