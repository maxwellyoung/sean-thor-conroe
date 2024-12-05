"use client";

import { motion } from "framer-motion";

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
          <div className="space-y-8">
            {journalEntries.map((entry, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-border pb-8"
              >
                <time className="text-sm text-muted-foreground">
                  {entry.date}
                </time>
                <h2 className="text-2xl font-serif font-bold mt-2 mb-4">
                  {entry.title}
                </h2>
                <p className="text-lg text-muted-foreground">{entry.excerpt}</p>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="inline-block mt-4 text-primary font-semibold"
                >
                  Read more →
                </motion.a>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
