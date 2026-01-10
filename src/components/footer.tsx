export function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="container flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} sean thor conroe</span>
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
