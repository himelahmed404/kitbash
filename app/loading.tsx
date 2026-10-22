import * as React from 'react';

export default function Loading() {
  return (
    <main
      role="status"
      aria-busy="true"
      aria-label="Loading page"
      className="flex-1 flex flex-col items-center justify-center min-h-[60vh] px-4 py-16"
    >
      <div className="bg-paper border-3 border-ink shadow-brutal p-8 md:p-12 flex flex-col items-center max-w-sm w-full text-center">
        {/* 3-Square Bounce */}
        <div className="flex items-center gap-3.5 mb-6" aria-hidden="true">
          <span
            className="w-5 h-5 bg-sun border-3 border-ink shadow-brutal-sm animate-bounce"
            style={{ animationDelay: '0ms', animationDuration: '0.8s' }}
          />
          <span
            className="w-5 h-5 bg-bubblegum border-3 border-ink shadow-brutal-sm animate-bounce"
            style={{ animationDelay: '160ms', animationDuration: '0.8s' }}
          />
          <span
            className="w-5 h-5 bg-mint border-3 border-ink shadow-brutal-sm animate-bounce"
            style={{ animationDelay: '320ms', animationDuration: '0.8s' }}
          />
        </div>

        <p className="font-mono text-xs font-bold uppercase tracking-widest text-ink">
          Unpacking Kit...
        </p>
        <p className="font-mono text-[11px] text-graphite mt-1.5">
          Loading components & blueprints
        </p>

        <span className="sr-only">Loading page content, please wait...</span>
      </div>
    </main>
  );
}
