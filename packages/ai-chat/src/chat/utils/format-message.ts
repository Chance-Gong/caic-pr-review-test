export interface MessageInput {
  text: string;
  maxLength?: number;
}

export function formatMessage({ text, maxLength }: MessageInput): string {
  const trimmed = text.trim();
  if (maxLength !== undefined && trimmed.length > maxLength) {
    return `${trimmed.slice(0, maxLength - 1)}\u2026`;
  }
  return trimmed;
}
