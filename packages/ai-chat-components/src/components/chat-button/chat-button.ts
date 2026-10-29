import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@carbon/web-components/es/components/button/index.js';

@customElement('example-chat-button')
export class ChatButton extends LitElement {
  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String })
  label = '';

  private formatLabel(text: string): string {
    const trimmed = text.trim();
    if (trimmed.length > 30) {
      return trimmed.slice(0, 29) + '\u2026';
    }
    return trimmed;
  }

  render() {
    return html`<cds-button kind="primary" ?disabled=${this.disabled}>
      ${this.formatLabel(this.label)}
    </cds-button>`;
  }
}
