export function formatPrice(amount: number, currency: string = "BDT"): string {
  const symbol = currency === "BDT" ? "\u09F3" : "$";
  return `${symbol}${amount.toLocaleString("en-US")}`;
}

export function discountPercent(price: number, originalPrice?: number): number | null {
  if (!originalPrice || originalPrice <= price) return null;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
