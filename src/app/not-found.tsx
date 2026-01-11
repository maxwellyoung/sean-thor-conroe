import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-2xl">
        <h1
          className="text-6xl md:text-8xl mb-8 glitch-hover font-bold"
          data-text="404"
        >
          404
        </h1>

        <blockquote className="border-l-2 border-border pl-4 text-muted-foreground italic mb-8">
          sometimes you end up places you didn&apos;t mean to go.
        </blockquote>

        <p className="text-sm text-muted-foreground mb-8">
          page not found. it happens.
        </p>

        <nav className="flex gap-4 text-sm">
          <Link href="/">home</Link>
          <Link href="/works">works</Link>
          <Link href="/journal">journal</Link>
          <Link href="/podcast">podcast</Link>
        </nav>
      </div>
    </div>
  );
}
