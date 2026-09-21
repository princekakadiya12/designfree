'use client';

/**
 * Minimal input sanitization for form safety.
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';

  let clean = input;

  // Strip script tags and event handlers
  clean = clean.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  clean = clean.replace(/javascript:/gi, '');
  clean = clean.replace(/on\w+\s*=/gi, '');

  // Strip all HTML tags
  clean = clean.replace(/<[^>]*>?/gm, '');

  return clean.trim();
}
