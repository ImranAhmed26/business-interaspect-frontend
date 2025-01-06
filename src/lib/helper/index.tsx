import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const colorClasses: Record<string, string> = {
  green: 'bg-green-200/40',
  orange: 'bg-amber-200/40',
  blue: 'bg-indigo-200/40',
  red: 'bg-red-300/40',
}; // Remember include these colors in tailwind config safelist

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
