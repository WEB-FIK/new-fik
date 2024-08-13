import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names using clsx and tailwind-merge.
 * This function combines the power of clsx for conditional class names
 * with twMerge to handle Tailwind CSS class conflicts.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Truncates text to a specified number of words.
 * @param text - The text to truncate
 * @param wordLimit - The maximum number of words to include
 * @returns Truncated text or empty string if input is null/undefined
 */
export function truncateText(
  text: string | null | undefined,
  wordLimit: number
): string {
  if (!text) return "";

  const words = text.trim().split(/\s+/);
  if (words.length <= wordLimit) return text;

  return words.slice(0, wordLimit).join(" ") + "...";
}

/**
 * Capitalizes the first letter of a string.
 * @param str - The string to capitalize
 * @returns Capitalized string or empty string if input is empty
 */
export function capitalize(str: string | null | undefined): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Formats a date string to a localized date representation.
 * @param dateString - The date string to format
 * @param locale - Optional locale for formatting (defaults to user's locale)
 * @returns Formatted date string or 'Invalid Date' if input is invalid
 */
export function formatDate(dateString: string, locale?: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  return date.toLocaleDateString(locale, options);
}

/**
 * Converts a string to a URL-friendly slug.
 * @param text - The text to convert to a slug
 * @returns URL-friendly slug or 'n-a' if input is empty
 */
export function slugify(text: string | null | undefined): string {
  if (!text) return "n-a";

  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}
