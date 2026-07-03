import clsx, { type ClassValue } from 'clsx';

/** Combina classes condicionalmente. Uso: cn('base', condicao && 'classe-extra') */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}