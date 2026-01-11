import Image from "next/image";

export default function About() {
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-2xl">
        <h1 className="text-lg mb-8">about</h1>

        <div className="grid gap-8 md:grid-cols-[1fr,200px] items-start mb-12">
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              sean thor conroe was born kamura sho (香村翔宇) in tokyo in 1991. raised in scotland, upstate new york, and the greater bay area. studied literature and philosophy at swarthmore. attended columbia for an mfa.
            </p>
            <p>
              worked as a bike messenger in philly. started writing fuccboi in 2018. finished during lockdown. little, brown published it in 2022.
            </p>
            <p>
              hosts{" "}
              <a href="https://www.youtube.com/@1storypod" target="_blank" rel="noopener noreferrer">
                1storypod
              </a>
              {" "}with harold rogers. conversations about books, writing, art. archives other work at{" "}
              <a href="http://www.1storyhaus.com/" target="_blank" rel="noopener noreferrer">
                1storyhaus.com
              </a>
              .
            </p>
            <p>
              writes on{" "}
              <a href="https://seanthorconroe.substack.com" target="_blank" rel="noopener noreferrer">
                substack
              </a>
              . tweets{" "}
              <a href="https://x.com/stconroe" target="_blank" rel="noopener noreferrer">
                @stconroe
              </a>
              .
            </p>
          </div>

          <div className="order-first md:order-last">
            <Image
              src="/images/sean1.webp"
              alt="sean thor conroe"
              width={200}
              height={267}
              className="border border-border"
            />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
            timeline
          </h2>
          <ul className="text-sm space-y-3 text-muted-foreground">
            <li>
              <span className="text-foreground">2018</span> — began writing fuccboi in philadelphia
            </li>
            <li>
              <span className="text-foreground">2020</span> — completed manuscript during lockdown
            </li>
            <li>
              <span className="text-foreground">2022</span> — fuccboi published by little, brown.{" "}
              <a
                href="https://www.nytimes.com/2022/01/25/books/review/fuccboi-sean-thor-conroe.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                nyt review
              </a>
            </li>
            <li>
              <span className="text-foreground">2023</span> — launched 1storypod.{" "}
              <a href="https://www.youtube.com/@1storypod" target="_blank" rel="noopener noreferrer">
                youtube
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
            influences
          </h2>
          <p className="text-sm text-muted-foreground">
            nietzsche. bolaño. wittgenstein. drake. young m.a. faulkner. the recognitions. soundcloud rap. autofiction. the internet.{" "}
            <a href="/influences">see full list →</a>
          </p>
        </section>
      </div>
    </div>
  );
}
