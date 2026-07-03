/** Formata um valor numérico como moeda brasileira (BRL). */
export function formatCurrency(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

/** Formata um CEP no padrão 00000-000 enquanto o usuário digita. */
export function formatCep(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

/** Calcula o percentual de desconto entre preço cheio e preço promocional. */
export function calculateDiscountPercent(fullPrice: number, salePrice: number): number {
  if (fullPrice <= 0 || salePrice >= fullPrice) return 0;
  return Math.round(((fullPrice - salePrice) / fullPrice) * 100);
}