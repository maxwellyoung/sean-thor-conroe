"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Star } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface BookDialogProps {
  book: {
    title: string;
    coverImage: string;
    description: string;
    publishDate: string;
    publisher: string;
    isbn: string;
    pages: number;
    purchaseLinks: {
      name: string;
      url: string;
    }[];
    reviews: {
      text: string;
      author: string;
      source: string;
      rating?: number;
    }[];
    goodreadsUrl: string;
    excerpt?: string;
  };
  trigger: React.ReactNode;
}

export function BookDialog({ book, trigger }: BookDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">
            {book.title}
          </DialogTitle>
          <DialogDescription>
            Published by {book.publisher}, {book.publishDate}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full pr-4">
          <div className="grid gap-8 md:grid-cols-[300px,1fr]">
            <div className="space-y-4">
              <div className="relative aspect-[3/4]">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Purchase</h3>
                <div className="grid gap-2">
                  {book.purchaseLinks.map((link) => (
                    <Button
                      key={link.name}
                      variant="outline"
                      className="justify-start"
                      asChild
                    >
                      <Link href={link.url} target="_blank">
                        {link.name}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Details</h3>
                <dl className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Pages</dt>
                    <dd>{book.pages}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">ISBN</dt>
                    <dd>{book.isbn}</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold">About the Book</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {book.description}
                </p>
              </div>
              {book.excerpt && (
                <>
                  <Separator />
                  <div className="space-y-4">
                    <h3 className="font-semibold">Excerpt</h3>
                    <blockquote className="italic border-l-2 pl-4 text-muted-foreground">
                      {book.excerpt}
                    </blockquote>
                  </div>
                </>
              )}
              <Separator />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Reviews</h3>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={book.goodreadsUrl} target="_blank">
                      View on Goodreads
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="space-y-4">
                  {book.reviews.map((review, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      {review.rating && (
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-primary text-primary"
                            />
                          ))}
                        </div>
                      )}
                      <p className="italic">{review.text}</p>
                      <p className="text-sm text-muted-foreground">
                        —{review.author}, {review.source}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
