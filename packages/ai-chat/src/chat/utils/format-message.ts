export interface MessageInput {
  text: string;
  maxLength?: number;
}

const DEFAULT_MAX_LENGTH = 500;

/**
 * Format a message for display.
 * @param text - the input text to format
 * @param maxLength - the length at which to truncate (defaults to 500)
 */
export function formatMessage({ text, maxLength = DEFAULT_MAX_LENGTH }: MessageInput): string {
  const trimmed = text.trim();
  if (trimmed.length <= maxLength) {
    return trimmed;
  }
  return `${trimmed.slice(0, maxLength - 1)}\u2026`;
}
