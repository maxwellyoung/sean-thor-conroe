"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import NextLink from "next/link";

interface JournalEntry {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

export default function Journal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRSSFeed() {
      try {
        // Fetch RSS feed through a proxy to avoid CORS issues
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
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-serif font-bold">Journal</h1>
            <Button variant="outline" asChild>
              <NextLink
                href="https://seanthorconroe.substack.com"
                target="_blank"
                className="flex items-center"
              >
                Subscribe on Substack
                <ArrowRight className="ml-2 h-4 w-4" />
              </NextLink>
            </Button>
          </div>

          <div className="space-y-12">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
              </div>
            ) : (
              entries.map((entry, index) => (
                <motion.article
                  key={entry.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <time className="text-sm text-muted-foreground">
                    {new Date(entry.pubDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="text-2xl font-serif font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                    {entry.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {entry.description}
                  </p>
                  <div className="mt-4">
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <NextLink href={entry.link} target="_blank">
                        Read more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </NextLink>
                    </Button>
                  </div>
                </motion.article>
              ))
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
