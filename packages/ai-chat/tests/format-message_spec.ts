import { formatMessage } from '../src/chat/utils/format-message';

describe('formatMessage', () => {
  it('trims whitespace', () => {
    expect(formatMessage({ text: '  hello  ' })).toBe('hello');
  });

  it('truncates text longer than maxLength with an ellipsis', () => {
    expect(formatMessage({ text: 'abcdefghij', maxLength: 5 })).toBeDefined();
  });

  it('leaves text at exactly maxLength unchanged', () => {
    expect(formatMessage({ text: 'abcde', maxLength: 5 })).toBe('abcde');
  });
});
