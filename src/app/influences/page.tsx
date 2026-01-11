import { Metadata } from "next";

export const metadata: Metadata = {
  title: "influences",
  description: "writers, philosophers, and artists who shaped sean thor conroe's work",
};

const influences = [
  {
    category: "literature",
    items: [
      {
        name: "roberto bolaño",
        work: "the savage detectives, 2666",
        note: "the sprawl. the obsession. poets as outlaws.",
      },
      {
        name: "william faulkner",
        work: "the sound and the fury, absalom absalom",
        note: "stream of consciousness as truth-telling. the sentence as a world.",
      },
      {
        name: "tao lin",
        work: "taipei, shoplifting from american apparel",
        note: "flatness as style. millennial ennui rendered precisely.",
      },
      {
        name: "sam pink",
        work: "person, rontel",
        note: "the ordinary made strange. humor in desolation.",
      },
      {
        name: "megan boyle",
        work: "liveblog, selected unpublished blog posts",
        note: "radical honesty. the document as art.",
      },
      {
        name: "marie calloway",
        work: "what purpose did i serve in your life",
        note: "exposure as form. the personal made public.",
      },
    ],
  },
  {
    category: "philosophy",
    items: [
      {
        name: "friedrich nietzsche",
        work: "thus spoke zarathustra, beyond good and evil",
        note: "self-overcoming. the will to create meaning.",
      },
      {
        name: "ludwig wittgenstein",
        work: "philosophical investigations, tractatus",
        note: "language games. the limits of what can be said.",
      },
      {
        name: "emil cioran",
        work: "the trouble with being born",
        note: "pessimism as clarity. the aphorism as weapon.",
      },
    ],
  },
  {
    category: "music",
    items: [
      {
        name: "drake",
        work: "take care, nothing was the same",
        note: "vulnerability as flex. the confessional mode.",
      },
      {
        name: "young m.a.",
        work: "herstory",
        note: "directness. saying exactly what you mean.",
      },
      {
        name: "frank ocean",
        work: "blonde, channel orange",
        note: "texture. emotion as atmosphere.",
      },
      {
        name: "kanye west",
        work: "my beautiful dark twisted fantasy, yeezus",
        note: "maximalism. ego as art form.",
      },
    ],
  },
  {
    category: "internet / misc",
    items: [
      {
        name: "dril",
        work: "@dril",
        note: "absurdism. the tweet as literature.",
      },
      {
        name: "alt-lit movement",
        work: "muumuu house, pop serial",
        note: "the internet as medium. sincerity + irony.",
      },
    ],
  },
];

export default function Influences() {
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-2xl">
        <h1 className="text-lg mb-2">influences</h1>
        <p className="text-sm text-muted-foreground mb-12">
          the writers, thinkers, and artists who shaped fuccboi and everything
          after.
        </p>

        {influences.map((section) => (
          <section key={section.category} className="mb-12">
            <h2 className="text-xs text-muted-foreground mb-6 uppercase tracking-wider">
              {section.category}
            </h2>
            <ul className="space-y-6">
              {section.items.map((item) => (
                <li key={item.name} className="border-l-2 border-border pl-4">
                  <h3 className="text-sm mb-1">{item.name}</h3>
                  <p className="text-xs text-muted-foreground mb-1 italic">
                    {item.work}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.note}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground italic">
            &quot;you are what you consume. and what you consume consumes
            you.&quot;
          </p>
        </section>
      </div>
    </div>
  );
}
