"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, ArrowRight } from "lucide-react";

const journalEntries = [
  {
    date: "Nov 29, 2023",
    title: "Sedrick Chisom interview",
    excerpt: "Interviewed the painter Sedrick Chisom",
    link: "https://seanthorconroe.substack.com/p/sedrick-chisom-interview",
  },
  {
    date: "Nov 22, 2023",
    title: "Carpentry Journal 4",
    excerpt: "Latest entry in the carpentry series",
    link: "https://seanthorconroe.substack.com/p/carpentry-journal-4",
  },
  {
    date: "Nov 20, 2023",
    title: "Diversity, Equity, and Inclusion",
    excerpt: "Set building with the boys for JP Morgan's DEI event",
    link: "https://seanthorconroe.substack.com/p/diversity-equity-and-inclusion",
  },
  {
    date: "Oct 23, 2023",
    title: "Carpentry Journal",
    excerpt: "My personal journal",
    link: "https://seanthorconroe.substack.com/p/carpentry-journal",
  },
  {
    date: "Oct 14, 2023",
    title: "Journal 1",
    excerpt: "Contexts, Housekeeping, boundaries...",
    link: "https://seanthorconroe.substack.com/p/journal-1",
  },
  {
    date: "Jul 18, 2023",
    title: "On Sam Pink, Scheming, and Slander",
    excerpt: "The truth about MFA Dads...",
    link: "https://seanthorconroe.substack.com/p/on-sam-pink-scheming-and-slander",
  },
  {
    date: "Jul 10, 2023",
    title: "Coming soon",
    excerpt: "This is Sean's Substack",
    link: "https://seanthorconroe.substack.com/p/coming-soon",
  },
];

export default function Journal() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-serif font-bold mb-8">Journal</h1>
          <div className="space-y-12">
            {journalEntries.map((entry, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <time className="text-sm text-muted-foreground">
                  {entry.date}
                </time>
                <h2 className="text-2xl font-serif font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {entry.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {entry.excerpt}
                </p>
                <div className="mt-4">
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href={entry.link} target="_blank">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
