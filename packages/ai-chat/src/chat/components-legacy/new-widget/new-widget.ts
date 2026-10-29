import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('example-new-widget')
export class NewWidget extends LitElement {
  render() {
    return html`<div class="widget"><slot></slot></div>`;
  }
}
