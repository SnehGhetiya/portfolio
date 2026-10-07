import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPeriod(period: { start: string; end?: string }) {
  if (!period.end) return `${period.start} — Present`;
  if (period.start === period.end) return period.start;
  return `${period.start} — ${period.end}`;
}

export function formatDuration(period: { start: string; end?: string }) {
  const start = new Date(period.start);
  const end = period.end ? new Date(period.end) : new Date();

  const months = Math.max(
    1,
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1,
  );

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const parts: string[] = [];
  if (years) parts.push(`${years}y`);
  if (remainingMonths || !years) parts.push(`${remainingMonths}m`);

  return parts.join(" ");
}
