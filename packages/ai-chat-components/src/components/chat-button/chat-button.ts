import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@carbon/web-components/es/components/button/index.js';

@customElement('example-chat-button')
export class ChatButton extends LitElement {
  @property({ type: Boolean, reflect: true })
  disabled = false;

  render() {
    return html`<cds-button kind="primary" icon-placement="right" ?disabled=${this.disabled}>
      <slot></slot>
    </cds-button>`;
  }
}
