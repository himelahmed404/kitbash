'use client';

import { Toaster as SonnerToaster } from 'sonner';

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            'w-full max-w-[360px] flex items-center gap-3 bg-paper text-ink border-3 border-ink p-4 shadow-brutal font-sans text-sm font-bold',
          title: 'font-bold text-ink',
          description: 'text-xs text-graphite font-normal font-sans',
          actionButton:
            'bg-sun text-ink font-bold border-2 border-ink px-3 py-1 text-xs hover:bg-cream',
          cancelButton:
            'bg-fog text-graphite border-2 border-ink px-3 py-1 text-xs',
          success: 'border-l-[8px] border-l-mint',
          error: 'border-l-[8px] border-l-danger',
          info: 'border-l-[8px] border-l-sun',
          warning: 'border-l-[8px] border-l-bubblegum',
        },
      }}
    />
  );
}
