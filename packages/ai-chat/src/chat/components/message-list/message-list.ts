import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { formatMessage } from '../../utils/format-message';

@customElement('example-message-list')
export class MessageList extends LitElement {
  @property({ type: Array })
  messages: string[] = [];

  @property({ type: Boolean })
  scrollable = false;

  @property({ type: String })
  emptyText = 'No messages yet.';

  @property({ type: Boolean })
  reversed = false;

  @property({ type: String })
  highlightQuery = '';

  private readonly onResize = () => this.requestUpdate();

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.onResize);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.onResize);
    super.disconnectedCallback();
  }

  private getDisplayMessages(): string[] {
    return this.reversed ? [...this.messages].reverse() : this.messages;
  }

  private highlightText(text: string): string {
    if (!this.highlightQuery) return text;
    return text.replace(
      new RegExp(this.highlightQuery, 'gi'),
      (match) => `<mark>${match}</mark>`
    );
  }

  render() {
    const items = this.getDisplayMessages();
    if (items.length === 0) {
      return html`<p class="empty">${this.emptyText}</p>`;
    }
    return html`<ul role="list" class=${this.scrollable ? 'scrollable' : ''}>
      ${items.map(
        (message) =>
          html`<li .innerHTML=${this.highlightText(formatMessage({ text: message }))}></li>`
      )}
    </ul>`;
  }
}
