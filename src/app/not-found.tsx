import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)]">
      <div className="text-center section-container">
        <span className="block font-mono text-8xl font-bold text-white/[0.04] mb-4">
          404
        </span>
        <h1 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-3">
          Page not found
        </h1>
        <p className="text-sm text-[var(--color-text-muted)] mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-text-primary)] text-[var(--color-bg)] text-sm font-medium rounded-sm hover:bg-[var(--color-accent)] transition-colors duration-300"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
