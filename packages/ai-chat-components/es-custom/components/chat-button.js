// Generated output — do not edit by hand.
// This file is regenerated from chat-button.ts.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@carbon/web-components/es/components/button/index.js';
let ChatButton = class ChatButton extends LitElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.kind = 'primary';
    }
    render() {
        return html`<cds-button kind=${this.kind} ?disabled=${this.disabled}><slot></slot></cds-button>`;
    }
};
__decorate([
    property({ type: Boolean, reflect: true })
], ChatButton.prototype, 'disabled', void 0);
__decorate([
    property({ type: String })
], ChatButton.prototype, 'kind', void 0);
ChatButton = __decorate([
    customElement('example-chat-button')
], ChatButton);
export { ChatButton };
