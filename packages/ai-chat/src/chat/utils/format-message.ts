export interface MessageInput {
  text: string;
  maxLength?: number;
}

const DEFAULT_MAX_LENGTH = 500;

// Trim leading/trailing whitespace before applying the length cap.
export function formatMessage({ text, maxLength = DEFAULT_MAX_LENGTH }: MessageInput): string {
  const trimmed = text.trimStart().trimEnd();
  if (trimmed.length <= maxLength) {
    return trimmed;
  }
  return `${trimmed.slice(0, maxLength - 1)}\u2026`;
}
