export function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="container flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <div className="flex gap-4">
          <span>© {new Date().getFullYear()} sean thor conroe</span>
          <a href="/api/feed" title="RSS Feed">
            rss
          </a>
        </div>
        <span>
          site by{" "}
          <a
            href="https://dev.maxwellyoung.info"
            target="_blank"
            rel="noopener noreferrer"
          >
            maxwell young
          </a>
        </span>
      </div>
    </footer>
  );
}
