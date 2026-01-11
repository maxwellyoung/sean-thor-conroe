import Image from "next/image";
import Link from "next/link";
import { ExcerptShuffler } from "@/components/excerpt-shuffler";

export default function Home() {
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-2xl">
        <p className="text-muted-foreground mb-8">
          writer. host of{" "}
          <a href="https://www.youtube.com/@1storypod" target="_blank" rel="noopener noreferrer">
            1storypod
          </a>
          . born kamura sho (香村翔宇) in tokyo, 1991.
        </p>

        <section className="mb-16">
          <h2 className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
            latest
          </h2>
          <div className="space-y-4">
            <div className="flex gap-6 items-start">
              <Link href="/works" className="shrink-0 no-underline hover:no-underline">
                <Image
                  src="/images/fuccboi-cover-1.webp"
                  alt="Fuccboi"
                  width={120}
                  height={180}
                  className="border border-border"
                />
              </Link>
              <div>
                <h3 className="text-lg mb-2">
                  <Link href="/works" className="no-underline hover:underline">
                    fuccboi
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  little, brown and company, 2022
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  &quot;terse and intense and new...i loved it.&quot;
                  <br />
                  —tommy orange
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
            from the book
          </h2>
          <ExcerptShuffler />
        </section>

        <section className="mb-16">
          <h2 className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
            links
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://www.youtube.com/@1storypod" target="_blank" rel="noopener noreferrer">
                1storypod
              </a>
              {" "}— weekly conversations on writing, art, and life
            </li>
            <li>
              <a href="https://www.patreon.com/1storypod" target="_blank" rel="noopener noreferrer">
                patreon
              </a>
              {" "}— full episodes + extras
            </li>
            <li>
              <a href="https://seanthorconroe.substack.com" target="_blank" rel="noopener noreferrer">
                substack
              </a>
              {" "}— writing updates, essays
            </li>
            <li>
              <a href="https://blast2mag.substack.com" target="_blank" rel="noopener noreferrer">
                blast 2
              </a>
              {" "}— radical literature magazine (co-editor)
            </li>
            <li>
              <a href="https://x.com/stconroe" target="_blank" rel="noopener noreferrer">
                twitter
              </a>
              {" "}— @stconroe
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
            press
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              &quot;raw, insightful, and incredibly entertaining.&quot;
              <br />
              <span className="text-xs">— the new york times</span>
            </li>
            <li>
              &quot;a provocative debut novel... a gen-z bildungsroman that challenges the genre&apos;s conventions.&quot;
              <br />
              <span className="text-xs">— publishers weekly (starred review)</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
