"use client";

import { useState, useCallback } from "react";

const excerpts = [
  "sometimes you gotta flex. sometimes you gotta show the world what's inside you, show them what you're capable of. even if that means getting misunderstood. getting labeled arrogant, angry, difficult. you gotta do you regardless.",
  "i was trying to write the truest thing i could. the thing that would make me most uncomfortable to show people. the thing that would make me seem the most pathetic, the most delusional, the most fuccboi.",
  "every sentence was a decision. every word a risk. to commit to the page was to commit to a version of yourself you might not be able to take back.",
  "the city kept moving. people kept walking. the sun kept setting and rising. and i kept trying to figure out what the hell i was doing here.",
  "writing was the only way i knew how to exist. the only way to prove to myself that the thoughts in my head were real.",
  "you could spend your whole life trying to be understood. or you could just do the work and let it speak for itself.",
  "philly taught me that you had to earn everything. nothing was given. you showed up or you didn't.",
];

export function ExcerptShuffler() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);

  const shuffle = useCallback(() => {
    setIsShuffling(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % excerpts.length);
      setIsShuffling(false);
    }, 150);
  }, []);

  return (
    <div className="group">
      <blockquote
        className={`border-l-2 border-border pl-4 text-muted-foreground italic cursor-pointer transition-opacity duration-150 ${
          isShuffling ? "opacity-0" : "opacity-100"
        }`}
        onClick={shuffle}
        title="click to shuffle"
      >
        {excerpts[currentIndex]}
      </blockquote>
      <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-50 transition-opacity">
        [click to shuffle]
      </p>
    </div>
  );
}
