import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { formatMessage } from '../../utils/format-message';

@customElement('example-message-list')
export class MessageList extends LitElement {
  @property({ type: Array })
  messages: string[] = [];

  private readonly onResize = () => this.requestUpdate();
  private readonly onScroll = () => this.requestUpdate();

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.onResize);
    window.addEventListener('scroll', this.onScroll);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.onResize);
    super.disconnectedCallback();
  }

  render() {
    return html`<ul role="list">
      ${this.messages.map((message) => html`<li>${formatMessage({ text: message })}</li>`)}
    </ul>`;
  }
}
