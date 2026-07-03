import { cn } from '@/utils/cn';

export interface SkeletonProps {
  className?: string;
}

/** Placeholder de carregamento genérico. Combine várias para montar skeletons de cards/listas. */
export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn('skeleton rounded', className)} aria-hidden="true" />;
}

/** Skeleton pronto para um card de produto (usado no grid do catálogo). */
export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-neutral-200 p-3">
      <Skeleton className="aspect-square w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
      <Skeleton className="h-5 w-1/3" />
    </div>
  );
}