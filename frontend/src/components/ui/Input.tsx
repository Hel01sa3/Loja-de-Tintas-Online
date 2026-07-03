import { forwardRef, useState, type InputHTMLAttributes } from 'react';
import { Eye, EyeOff, Search, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  success?: boolean;
  hint?: string;
  leftIcon?: React.ReactNode;
  inputSize?: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: 'h-9 text-sm',
  md: 'h-11 text-sm',
  lg: 'h-13 text-base',
};

/** Input de texto padrão. Para busca use InputSearch; para senha use InputPassword. */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, success, hint, leftIcon, inputSize = 'md', id, disabled, ...props }, ref) => {
    const inputId = id ?? props.name;
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-neutral-900">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={!!error}
            className={cn(
              'w-full rounded border bg-white px-3.5 text-neutral-900 placeholder:text-neutral-600/60',
              'transition-colors duration-150 outline-none',
              'disabled:bg-neutral-50 disabled:text-neutral-600 disabled:cursor-not-allowed',
              leftIcon && 'pl-10',
              error
                ? 'border-error focus:ring-2 focus:ring-error/30'
                : success
                ? 'border-success focus:ring-2 focus:ring-success/30'
                : 'border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20',
              sizeStyles[inputSize],
              className
            )}
            {...props}
          />
          {success && !error && (
            <CheckCircle2 className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-success" aria-hidden="true" />
          )}
          {error && (
            <AlertCircle className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-error" aria-hidden="true" />
          )}
        </div>
        {error ? (
          <p className="mt-1.5 text-xs text-error">{error}</p>
        ) : hint ? (
          <p className="mt-1.5 text-xs text-neutral-600">{hint}</p>
        ) : null}
      </div>
    );
  }
);
Input.displayName = 'Input';

/** Campo de busca com ícone de lupa. */
export const InputSearch = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input ref={ref} type="search" leftIcon={<Search className="size-4" />} {...props} />
));
InputSearch.displayName = 'InputSearch';

/** Campo de senha com alternância de visibilidade. */
export const InputPassword = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [visible, setVisible] = useState(false);
    return (
      <div className="relative">
        <Input ref={ref} type={visible ? 'text' : 'password'} className={cn('pr-10', className)} {...props} />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute right-3 top-[38px] text-neutral-600 hover:text-neutral-900"
          aria-label={visible ? 'Ocultar senha' : 'Mostrar senha'}
          tabIndex={-1}
        >
          {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>
    );
  }
);
InputPassword.displayName = 'InputPassword';