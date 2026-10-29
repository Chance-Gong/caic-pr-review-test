export interface MessageInput {
  text: string;
  maxLength?: number;
}

const DEFAULT_MAX_LENGTH = 500;

export function formatMessage({ text, maxLength = DEFAULT_MAX_LENGTH }: MessageInput): string {
  // trim the text
  const trimmed = text.trim();
  // check if under the limit
  if (trimmed.length <= maxLength) {
    return trimmed;
  }
  return `${trimmed.slice(0, maxLength - 1)}\u2026`;
}
