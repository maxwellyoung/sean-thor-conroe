"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookDialog } from "@/components/book-dialog";

const books = [
  {
    title: "Fuccboi",
    coverImage: "/images/fuccboi-cover-1.webp",
    description:
      "Set in Philadelphia, this autobiographical novel recounts the story of a young man navigating post-graduate life, masculinity, and the complexities of contemporary relationships. Written in a distinctive voice that blends literary sophistication with millennial vernacular, Fuccboi challenges conventions while exploring themes of identity, art, and survival in modern America.",
    publishDate: "January 25, 2022",
    publisher: "Little, Brown and Company",
    isbn: "978-0316395434",
    pages: 360,
    purchaseLinks: [
      {
        name: "Amazon",
        url: "https://www.amazon.com/Fuccboi-Novel-Sean-Thor-Conroe/dp/0316395439",
      },
      {
        name: "Barnes & Noble",
        url: "https://www.barnesandnoble.com/w/fuccboi-sean-thor-conroe/1139409825",
      },
      {
        name: "Bookshop.org",
        url: "https://bookshop.org/books/fuccboi-9780316395434/9780316395434",
      },
    ],
    reviews: [
      {
        text: "Terse and intense and new...I loved it.",
        author: "Tommy Orange",
        source: "Author of There There",
        rating: 5,
      },
      {
        text: "Raw, insightful, and incredibly entertaining.",
        author: "The New York Times",
        source: "Book Review",
        rating: 4,
      },
      {
        text: "A provocative debut novel... A Gen-Z bildungsroman that challenges the genre's conventions.",
        author: "Publishers Weekly",
        source: "Starred Review",
        rating: 5,
      },
    ],
    goodreadsUrl: "https://www.goodreads.com/book/show/57693457-fuccboi",
    excerpt:
      "Sometimes you gotta flex. Sometimes you gotta show the world what's inside you, show them what you're capable of. Even if that means getting misunderstood. Getting labeled arrogant, angry, difficult. You gotta do you regardless.",
  },
  // Add more books as needed
];

export default function Works() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-serif font-bold mb-8">Works</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookDialog
              key={book.title}
              book={book}
              trigger={
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] mb-4">
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      fill
                      className="object-cover rounded-lg transition-shadow group-hover:shadow-xl"
                    />
                  </div>
                  <h2 className="text-xl font-serif font-bold">{book.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {book.publishDate}
                  </p>
                </motion.div>
              }
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
