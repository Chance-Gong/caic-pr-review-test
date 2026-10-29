export interface MessageInput {
  text: string;
  maxLength?: number;
}

const DEFAULT_MAX_LENGTH = 500;

export function formatMessage({ text, maxLength = DEFAULT_MAX_LENGTH }: MessageInput): string {
  const trimmed = text.trim();
  const segmenter = new Intl.Segmenter();
  const segments = [...segmenter.segment(trimmed)];
  if (segments.length <= maxLength) {
    return trimmed;
  }
  return segments.slice(0, maxLength - 1).map((s) => s.segment).join('') + '\u2026';
}
