import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container py-20">
      <div className="max-w-2xl">
        <h1 className="text-lg mb-4">404</h1>
        <p className="text-sm text-muted-foreground mb-4">
          page not found.
        </p>
        <Link href="/" className="text-sm">
          ← back home
        </Link>
      </div>
    </div>
  );
}
