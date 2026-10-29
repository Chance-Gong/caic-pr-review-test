import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@carbon/web-components/es/components/button/index.js';

@customElement('example-chat-button')
export class ChatButton extends LitElement {
  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  loading = false;

  render() {
    return html`<cds-button kind="primary" ?disabled=${this.disabled || this.loading}>
      <slot></slot>
    </cds-button>`;
  }
}
