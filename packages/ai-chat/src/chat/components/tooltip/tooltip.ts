import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('example-tooltip')
export class Tooltip extends LitElement {
  @property({ type: String }) label = '';
  @property({ type: String }) placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @property({ type: Boolean }) disabled = false;
  @property({ type: Number }) delay = 300;
  @property({ type: String }) triggerType: 'hover' | 'click' | 'focus' = 'hover';
  @property({ type: Boolean }) closeOnOutsideClick = true;
  @property({ type: Boolean }) closeOnEscape = true;
  @property({ type: Boolean }) persistent = false;
  @property({ type: String }) id = '';
  @property({ type: String }) ariaLabel = '';
  @state() private visible = false;
  @state() private x = 0;
  @state() private y = 0;
  private _timer: ReturnType<typeof setTimeout> | null = null;
  private _trigger: HTMLElement | null = null;
  private readonly _onOutsideClick = (e: MouseEvent) => {
    if (!this.contains(e.target as Node)) this._hide();
  };
  private readonly _onEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') this._hide();
  };
  private _show() {
    if (this.disabled) return;
    if (this._timer) clearTimeout(this._timer);
    this._timer = setTimeout(() => { this.visible = true; }, this.delay);
  }
  private _hide() {
    if (this._timer) clearTimeout(this._timer);
    this._timer = null;
    this.visible = false;
  }
  private _toggle() {
    if (this.visible) this._hide(); else this._show();
  }
  private _computePosition() {
    if (!this._trigger) return;
    const r = this._trigger.getBoundingClientRect();
    const tw = this.offsetWidth;
    const th = this.offsetHeight;
    switch (this.placement) {
      case 'top': this.x = r.left + r.width / 2 - tw / 2; this.y = r.top - th - 8; break;
      case 'bottom': this.x = r.left + r.width / 2 - tw / 2; this.y = r.bottom + 8; break;
      case 'left': this.x = r.left - tw - 8; this.y = r.top + r.height / 2 - th / 2; break;
      case 'right': this.x = r.right + 8; this.y = r.top + r.height / 2 - th / 2; break;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this._trigger = this.previousElementSibling as HTMLElement | null;
    if (this._trigger && this.triggerType === 'hover') {
      this._trigger.addEventListener('mouseenter', () => this._show());
      this._trigger.addEventListener('mouseleave', () => this._hide());
    } else if (this._trigger && this.triggerType === 'click') {
      this._trigger.addEventListener('click', () => this._toggle());
    } else if (this._trigger && this.triggerType === 'focus') {
      this._trigger.addEventListener('focus', () => this._show());
      this._trigger.addEventListener('blur', () => this._hide());
    }
    if (this.closeOnOutsideClick) document.addEventListener('click', this._onOutsideClick);
    if (this.closeOnEscape) document.addEventListener('keydown', this._onEscape);
  }
  disconnectedCallback() {
    if (this.closeOnOutsideClick) document.removeEventListener('click', this._onOutsideClick);
    if (this.closeOnEscape) document.removeEventListener('keydown', this._onEscape);
    super.disconnectedCallback();
  }
  updated() { this._computePosition(); }
  render() {
    return html`<div
      role="tooltip"
      aria-label=${this.ariaLabel || this.label}
      style="left:${this.x}px;top:${this.y}px"
      class=${this.visible ? 'visible' : ''}>
      ${this.label}
    </div>`;
  }
}
