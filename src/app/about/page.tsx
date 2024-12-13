"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const milestones = [
  {
    year: 2018,
    event: "Began writing Fuccboi",
    description: "Started work on the manuscript in Philadelphia",
  },
  {
    year: 2020,
    event: "Completed manuscript",
    description: "Finished the first draft during lockdown",
  },
  {
    year: 2022,
    event: "Fuccboi published by Little, Brown",
    description: "Debut novel released to critical acclaim",
    link: {
      text: "Read in The New York Times",
      url: "https://www.nytimes.com/2022/01/25/books/review/fuccboi-sean-thor-conroe.html",
    },
  },
  {
    year: 2023,
    event: "Launched 1StoryPod",
    description: "Weekly conversations about writing and creativity",
    link: {
      text: "Listen on YouTube",
      url: "https://www.youtube.com/@1storypod",
    },
  },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={ref} className="container py-12 px-4 relative">
      <motion.div
        style={{ y }}
        className="absolute top-0 left-1/2 w-0.5 h-full bg-primary opacity-20"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="grid md:grid-cols-[1fr,200px] gap-8 items-start mb-16">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold font-serif">About Sean</h1>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Sean Thor Conroe is a groundbreaking voice in contemporary
                American literature. His debut novel, Fuccboi, has been hailed
                as a raw and intimate exploration of modern masculinity,
                identity, and the creative process.
              </p>
              <p className="text-lg text-muted-foreground">
                Born and raised in Tokyo, Japan, Sean brings a unique
                cross-cultural perspective to his work, blending literary
                sophistication with millennial vernacular to create a distinctly
                modern voice.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-[3/4] md:sticky md:top-24"
          >
            <Image
              src="/images/sean1.webp"
              alt="Sean Thor Conroe"
              fill
              priority
              placeholder="blur"
              blurDataURL="/images/sean1-blur.webp"
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>

        <div className="space-y-16">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 p-6 bg-card rounded-lg shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-bold">{milestone.year}</h3>
                    {milestone.link && (
                      <Link
                        href={milestone.link.url}
                        target="_blank"
                        className="text-sm text-primary hover:underline inline-flex items-center gap-1 shrink-0"
                      >
                        {milestone.link.text}
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                  <div>
                    <p className="font-medium mb-1">{milestone.event}</p>
                    <p className="text-sm text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-4 h-4 rounded-full bg-primary mx-4 z-10" />
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
