'use client';

import { toast } from 'sonner';
import { Button } from '@/components/ui/Button';
import { ShoppingCart } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

interface BuyKitButtonProps {
  price: number;
}

export function BuyKitButton({ price }: BuyKitButtonProps) {
  return (
    <Button
      variant="primary"
      size="lg"
      onClick={() => {
        toast.info('Checkout is a demo — no real purchase was made.', {
          duration: 4000,
        });
      }}
    >
      <ShoppingCart className="w-5 h-5" strokeWidth={2.5} />
      {price === 0 ? 'Get for Free' : `Buy Kit — ${formatPrice(price)}`}
    </Button>
  );
}
