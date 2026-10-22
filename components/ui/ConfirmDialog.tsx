'use client';

import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { Button } from './Button';
import { AlertTriangle } from 'lucide-react';

export interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'danger' | 'primary' | 'dark';
  onConfirm: () => void;
}

export function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'danger',
  onConfirm,
}: ConfirmDialogProps) {
  return (
    <AlertDialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className="fixed inset-0 z-50 bg-ink/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <AlertDialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 w-[calc(100%-2rem)] max-w-md translate-x-[-50%] translate-y-[-50%] bg-paper border-3 border-ink shadow-brutal-lg p-6 sm:p-7 focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 font-sans">
          <div className="flex items-start gap-4 mb-4">
            {variant === 'danger' && (
              <div className="w-10 h-10 bg-danger/10 border-2 border-danger flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-danger stroke-[2.5]" />
              </div>
            )}
            <div>
              <AlertDialogPrimitive.Title className="text-xl sm:text-2xl font-bold tracking-tight text-ink">
                {title}
              </AlertDialogPrimitive.Title>
              <AlertDialogPrimitive.Description className="text-sm sm:text-base text-graphite mt-1.5 leading-relaxed">
                {description}
              </AlertDialogPrimitive.Description>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t-2 border-fog">
            <AlertDialogPrimitive.Cancel asChild>
              <Button variant="outline" size="md">
                {cancelLabel}
              </Button>
            </AlertDialogPrimitive.Cancel>
            <AlertDialogPrimitive.Action asChild>
              <Button
                variant={variant}
                size="md"
                onClick={(e) => {
                  e.preventDefault();
                  onConfirm();
                  onOpenChange(false);
                }}
              >
                {confirmLabel}
              </Button>
            </AlertDialogPrimitive.Action>
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}
