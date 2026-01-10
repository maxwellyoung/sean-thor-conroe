export default function Contact() {
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-2xl">
        <h1 className="text-lg mb-8">contact</h1>

        <div className="space-y-6 text-sm">
          <section>
            <h2 className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
              general
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@seanthorconroe.com">
                  contact@seanthorconroe.com
                </a>
              </li>
              <li>
                <a href="https://x.com/stconroe" target="_blank" rel="noopener noreferrer">
                  twitter @stconroe
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
              literary agent
            </h2>
            <p className="text-muted-foreground">
              for rights and media inquiries, contact through the publisher.
            </p>
          </section>

          <section>
            <h2 className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
              1storypod
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="https://www.youtube.com/@1storypod" target="_blank" rel="noopener noreferrer">
                  youtube
                </a>
              </li>
              <li>
                <a href="https://www.patreon.com/1storypod" target="_blank" rel="noopener noreferrer">
                  patreon
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
