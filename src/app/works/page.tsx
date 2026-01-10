import Image from "next/image";

const books = [
  {
    title: "fuccboi",
    year: "2022",
    publisher: "little, brown and company",
    coverImage: "/images/fuccboi-cover-1.webp",
    description:
      "autobiographical novel set in philadelphia. a young man navigating post-graduate life, masculinity, and contemporary relationships. written in a distinctive voice that blends literary sophistication with millennial vernacular.",
    excerpt:
      "sometimes you gotta flex. sometimes you gotta show the world what's inside you, show them what you're capable of. even if that means getting misunderstood. getting labeled arrogant, angry, difficult. you gotta do you regardless.",
    purchaseLinks: [
      {
        name: "amazon",
        url: "https://www.amazon.com/Fuccboi-Novel-Sean-Thor-Conroe/dp/0316395439",
      },
      {
        name: "barnes & noble",
        url: "https://www.barnesandnoble.com/w/fuccboi-sean-thor-conroe/1139409825",
      },
      {
        name: "bookshop.org",
        url: "https://bookshop.org/books/fuccboi-9780316395434/9780316395434",
      },
    ],
    goodreadsUrl: "https://www.goodreads.com/book/show/57693457-fuccboi",
    reviews: [
      {
        text: "terse and intense and new...i loved it.",
        author: "tommy orange",
      },
      {
        text: "raw, insightful, and incredibly entertaining.",
        source: "the new york times",
      },
      {
        text: "a provocative debut novel... a gen-z bildungsroman that challenges the genre's conventions.",
        source: "publishers weekly (starred review)",
      },
    ],
  },
];

export default function Works() {
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-2xl">
        <h1 className="text-lg mb-8">works</h1>

        {books.map((book) => (
          <article key={book.title} className="mb-16">
            <div className="flex gap-6 items-start mb-8">
              <Image
                src={book.coverImage}
                alt={book.title}
                width={150}
                height={225}
                className="border border-border shrink-0"
              />
              <div>
                <h2 className="text-xl mb-2">{book.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {book.publisher}, {book.year}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {book.description}
                </p>
              </div>
            </div>

            <section className="mb-8">
              <h3 className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                excerpt
              </h3>
              <blockquote className="border-l-2 border-border pl-4 text-sm text-muted-foreground italic">
                {book.excerpt}
              </blockquote>
            </section>

            <section className="mb-8">
              <h3 className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                reviews
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {book.reviews.map((review, i) => (
                  <li key={i}>
                    &quot;{review.text}&quot;
                    <br />
                    <span className="text-xs">
                      — {review.author || review.source}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                buy
              </h3>
              <ul className="flex flex-wrap gap-4 text-sm">
                {book.purchaseLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={book.goodreadsUrl} target="_blank" rel="noopener noreferrer">
                    goodreads
                  </a>
                </li>
              </ul>
            </section>
          </article>
        ))}
      </div>
    </div>
  );
}
