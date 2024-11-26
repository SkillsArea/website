import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getText = (field: { english: string; arabic: string }, language: string) =>
  language === "En" ? field.english : field.arabic;