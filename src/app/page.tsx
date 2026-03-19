"use client";

/**
 * Hello World — main page
 *
 * Fully static / client-only. No external services required.
 * Works without any environment variables configured.
 */

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-4">

      {/* ── Ambient background blobs ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        {/* Outer glow ring */}
        <div className="animate-pulse-ring absolute h-[520px] w-[520px] rounded-full bg-indigo-600/20 blur-3xl" />
        {/* Inner glow ring */}
        <div className="animate-pulse-ring absolute h-[320px] w-[320px] rounded-full bg-violet-500/25 blur-2xl [animation-delay:1.5s]" />
      </div>

      {/* ── Card ── */}
      <div
        className="
          animate-fade-up
          relative z-10
          flex flex-col items-center gap-6
          rounded-3xl
          border border-white/10
          bg-white/5
          px-12 py-14
          shadow-2xl
          backdrop-blur-md
          sm:px-20 sm:py-20
        "
      >
        {/* Greeting badge */}
        <span
          className="
            animate-fade-up
            inline-flex items-center gap-2
            rounded-full
            border border-indigo-400/30
            bg-indigo-500/10
            px-4 py-1.5
            text-xs font-semibold uppercase tracking-widest
            text-indigo-300
            [animation-delay:0.1s]
          "
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400" />
          Welcome
        </span>

        {/* Main heading with shimmer gradient */}
        <h1
          className="
            animate-shimmer
            animate-fade-up
            bg-gradient-to-r
            from-white via-indigo-200 to-violet-300
            bg-clip-text
            text-center
            text-6xl
            font-extrabold
            leading-tight
            tracking-tight
            text-transparent
            sm:text-8xl
            [animation-delay:0.2s]
          "
        >
          Hello World
        </h1>

        {/* Sub-copy */}
        <p
          className="
            animate-fade-up
            max-w-xs
            text-center
            text-base
            leading-relaxed
            text-slate-400
            sm:max-w-sm sm:text-lg
            [animation-delay:0.35s]
          "
        >
          Your next great idea starts right here. Edit{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-indigo-300">
            src/app/page.tsx
          </code>{" "}
          to get started.
        </p>

        {/* CTA buttons */}
        <div
          className="
            animate-fade-up
            mt-2
            flex flex-wrap items-center justify-center gap-3
            [animation-delay:0.5s]
          "
        >
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-xl
              bg-indigo-600
              px-6 py-2.5
              text-sm font-semibold
              text-white
              shadow-lg shadow-indigo-600/30
              transition
              hover:bg-indigo-500
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-indigo-500
            "
          >
            Read the docs
          </a>
          <a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-xl
              border border-white/10
              bg-white/5
              px-6 py-2.5
              text-sm font-semibold
              text-slate-200
              transition
              hover:bg-white/10
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-white/30
            "
          >
            Learn Next.js
          </a>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer
        className="
          animate-fade-up
          absolute bottom-6
          text-center
          text-xs
          text-slate-600
          [animation-delay:0.65s]
        "
      >
        Built with Next.js &amp; Tailwind CSS
      </footer>

    </main>
  );
}
