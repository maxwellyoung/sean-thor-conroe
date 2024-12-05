"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, ArrowRight } from "lucide-react";

const journalEntries = [
  {
    date: "May 15, 2023",
    title: "On Writing and Authenticity",
    excerpt:
      "Thoughts on maintaining a genuine voice in the face of success...",
  },
  {
    date: "April 2, 2023",
    title: "New Work in Progress",
    excerpt: "Excited to share that I have started work on a new project...",
  },
  // Add more entries as needed
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
                    <Link href="#">
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
