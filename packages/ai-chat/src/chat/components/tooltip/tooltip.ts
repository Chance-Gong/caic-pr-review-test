import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('example-tooltip')
export class Tooltip extends LitElement {
  @property({ type: String }) label = '';
  @property({ type: String }) placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Number }) delay = 300;
  @property({ type: String }) triggerType: 'hover' | 'click' | 'focus' = 'hover';
  @state() private visible = false;
  private _timer: ReturnType<typeof setTimeout> | null = null;
  private _show() { if (!this.disabled) { if (this._timer) clearTimeout(this._timer); this._timer = setTimeout(() => { this.visible = true; }, this.delay); } }
  private _hide() { if (this._timer) { clearTimeout(this._timer); this._timer = null; } this.visible = false; }
  render() { return html`<div role="tooltip">${this.label}</div>`; }
}
