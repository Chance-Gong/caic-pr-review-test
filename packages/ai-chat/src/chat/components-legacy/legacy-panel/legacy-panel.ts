import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('example-legacy-panel')
export class LegacyPanel extends LitElement {
  render() {
    return html`<section><slot></slot></section>`;
  }
}
