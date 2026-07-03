import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-hover active:bg-primary-hover shadow-card',
  secondary: 'bg-primary-light/15 text-primary hover:bg-primary-light/25 active:bg-primary-light/30',
  outline: 'border border-neutral-200 text-neutral-900 hover:border-primary hover:text-primary bg-transparent',
  ghost: 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 bg-transparent',
  cta: 'bg-accent text-white hover:bg-accent-hover active:bg-accent-hover shadow-card',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm gap-1.5',
  md: 'h-11 px-5 text-sm gap-2',
  lg: 'h-13 px-7 text-base gap-2',
};

/** Botão base do design system. Variantes: primary, secondary, outline, ghost, cta. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      leftIcon,
      rightIcon,
      fullWidth,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center rounded font-heading font-semibold',
          'transition-colors duration-150 ease-out',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          fullWidth && 'w-full',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';