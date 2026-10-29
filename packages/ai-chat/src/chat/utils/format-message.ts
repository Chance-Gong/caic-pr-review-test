export interface MessageInput {
  text: string;
  maxLength?: number;
}

const MAX_LENGTH = 500;

export function formatMessage({ text, maxLength = MAX_LENGTH }: MessageInput): string {
  const trimmed = text.trim();
  if (trimmed.length <= maxLength) {
    return trimmed;
  }
  return `${trimmed.slice(0, maxLength - 1)}\u2026`;
}
