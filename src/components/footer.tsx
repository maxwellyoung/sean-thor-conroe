export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sean Thor Conroe. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Website by{" "}
          <a
            href="https://dev.maxwellyoung.info"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all duration-300 underline-offset-4 hover:text-foreground"
          >
            Maxwell Young
          </a>
        </p>
      </div>
    </footer>
  );
}
