import { Star } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface RatingProps {
  value: number;
  reviewCount?: number;
  size?: 'sm' | 'md';
  className?: string;
}

/** Exibe nota em estrelas (somente leitura), com contagem opcional de avaliações. */
export function Rating({ value, reviewCount, size = 'sm', className }: RatingProps) {
  const starSize = size === 'sm' ? 'size-3.5' : 'size-4.5';
  return (
    <div className={cn('flex items-center gap-1', className)} role="img" aria-label={`Avaliação ${value} de 5`}>
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i + 1 <= Math.round(value);
          return (
            <Star
              key={i}
              className={cn(starSize, filled ? 'fill-accent text-accent' : 'fill-neutral-200 text-neutral-200')}
            />
          );
        })}
      </div>
      {reviewCount !== undefined && (
        <span className="text-xs text-neutral-600">({reviewCount})</span>
      )}
    </div>
  );
}