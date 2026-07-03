import type { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

export type BadgeVariant = 'primary' | 'success' | 'error' | 'warning' | 'neutral' | 'accent';

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-primary/10 text-primary',
  success: 'bg-success/10 text-success',
  error: 'bg-error/10 text-error',
  warning: 'bg-warning/10 text-warning',
  neutral: 'bg-neutral-100 text-neutral-600',
  accent: 'bg-accent/10 text-accent',
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

/** Selo pequeno para status (ex.: "Sem estoque", "Novo", desconto). */
export function Badge({ className, variant = 'neutral', children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-semibold',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export interface TagProps extends HTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  onRemove?: () => void;
}

/** Tag interativa usada em filtros selecionados. */
export function Tag({ className, selected, onRemove, children, ...props }: TagProps) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors',
        selected
          ? 'border-primary bg-primary/10 text-primary'
          : 'border-neutral-200 text-neutral-600 hover:border-neutral-600',
        className
      )}
      {...props}
    >
      {children}
      {onRemove && (
        <span
          role="button"
          aria-label="Remover filtro"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="ml-0.5 text-current opacity-60 hover:opacity-100"
        >
          ×
        </span>
      )}
    </button>
  );
}