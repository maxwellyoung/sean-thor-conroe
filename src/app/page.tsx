"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Newspaper,
  Youtube,
  Headphones,
  BookOpen,
  ShoppingCart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionPattern } from "@/components/section-pattern";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SectionPattern>
        <main className="flex-1">
          <section className="container py-12 md:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                  Fuccboi
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  &quot;Terse and intense and new...I loved it.&quot; —Tommy
                  Orange
                </p>
                <Button asChild size="lg" className="w-full sm:w-auto mb-8">
                  <Link href="/works">
                    Explore Works
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <div className="space-y-6 border-t pt-8">
                  <div className="space-y-2">
                    <h2 className="text-lg font-serif font-semibold">
                      1StoryPod
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Weekly conversations on writing, art, and life
                    </p>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://www.youtube.com/@1storypod"
                          target="_blank"
                        >
                          <Youtube className="mr-2 h-4 w-4" />
                          YouTube
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://www.patreon.com/1storypod"
                          target="_blank"
                        >
                          <Headphones className="mr-2 h-4 w-4" />
                          Full Episodes
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-lg font-serif font-semibold">
                      Journal
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Writing updates and thoughts on Substack
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href="https://seanthorconroe.substack.com"
                        target="_blank"
                      >
                        <Newspaper className="mr-2 h-4 w-4" />
                        Read Latest
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative aspect-[3/4] lg:aspect-[2/3] group"
              >
                <div className="relative h-full">
                  <Image
                    src="/images/fuccboi-cover-1.webp"
                    alt="Fuccboi by Sean Thor Conroe"
                    fill
                    priority
                    className="object-cover rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/80 to-transparent rounded-b-lg">
                    <div className="flex justify-between items-center">
                      <Button variant="ghost" size="sm" asChild>
                        <Link
                          href="https://www.goodreads.com/book/show/58078525-fuccboi"
                          target="_blank"
                          className="text-foreground/80 hover:text-foreground"
                        >
                          <BookOpen className="mr-2 h-4 w-4" />
                          Goodreads
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <Link
                          href="https://www.amazon.com.au/Fuccboi-Sean-Thor-Conroe/dp/0316394815"
                          target="_blank"
                          className="text-foreground/80 hover:text-foreground"
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Purchase
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </SectionPattern>

      <SectionPattern variant="muted">
        <section className="border-t bg-muted/40">
          <div className="container py-12">
            <h2 className="text-2xl font-serif font-bold mb-8">
              Critical Acclaim
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, index) => (
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <p className="text-lg italic">{review.text}</p>
                  <footer className="text-sm text-muted-foreground">
                    —{review.author}, {review.source}
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>
      </SectionPattern>
    </div>
  );
}

const reviews = [
  {
    text: "Terse and intense and new...I loved it.",
    author: "Tommy Orange",
    source: "Author of There There",
  },
  {
    text: "Raw, insightful, and incredibly entertaining.",
    author: "The New York Times",
    source: "Book Review",
  },
  {
    text: "A provocative debut novel... A Gen-Z bildungsroman that challenges the genre's conventions.",
    author: "Publishers Weekly",
    source: "Starred Review",
  },
];
