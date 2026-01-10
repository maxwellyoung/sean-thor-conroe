"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container py-20">
      <div className="max-w-2xl">
        <h1 className="text-lg mb-4">error</h1>
        <p className="text-sm text-muted-foreground mb-4">
          something went wrong.
        </p>
        <button onClick={() => reset()} className="text-sm underline">
          try again
        </button>
      </div>
    </div>
  );
}
