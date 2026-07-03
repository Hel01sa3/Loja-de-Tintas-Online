import { useEffect, type ReactNode } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  side?: 'left' | 'right';
  widthClassName?: string;
}

/** Painel deslizante lateral (carrinho, menu mobile, filtros). */
export function Drawer({ open, onClose, title, children, side = 'right', widthClassName = 'max-w-md' }: DrawerProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex">
      <div className="absolute inset-0 animate-fade-in bg-neutral-900/50" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          'relative flex h-full w-full flex-col bg-white shadow-popover animate-slide-in-right',
          widthClassName,
          side === 'left' ? 'mr-auto' : 'ml-auto'
        )}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
          <h3 className="font-heading text-base font-semibold">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="rounded-sm p-1 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}