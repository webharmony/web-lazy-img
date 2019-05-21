var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, customElement, html, LitElement, property } from 'lit-element';
let WebLazyImg = class WebLazyImg extends LitElement {
    constructor() {
        super(...arguments);
        this.preload = '';
        this.src = '';
        this.srcset = '';
        this.sizes = '';
        this.alt = '';
        this.width = '100%';
        this.height = '100%';
        this.isVisible = false;
        this.loaded = false;
        this.intersection = new IntersectionObserver((ent) => {
            if (ent[0].isIntersecting) {
                this.isVisible = ent[0].isIntersecting;
                this.intersection.unobserve(this);
            }
        });
    }
    static get styles() {
        return css `
      :host{
        display: inline-flex;
      }

      img:not(.preload, .loaded){
        animation: sharpen 1s both;
      }

      img.preload{
        width:100%;
        filter: blur(20px);
      }
      @keyframes sharpen {
        from {
          filter: blur(20px);
        }
        to {
          filter:blur(0px);
        }
      }
    `;
    }
    firstUpdated() {
        this.intersection.observe(this);
    }
    render() {
        return html `<img class="${this.loaded ? '' : 'preload'}" src="${this.isVisible ? this.src : this.preload}"
                  alt="${this.alt}" width="${this.width}" height=${this.height} sizes="${this.sizes}"
                  srcset="${this.srcset}" @load=${() => { this.loaded = true; }}/>`;
    }
};
__decorate([
    property({ type: String })
], WebLazyImg.prototype, "preload", void 0);
__decorate([
    property({ type: String })
], WebLazyImg.prototype, "src", void 0);
__decorate([
    property({ type: String })
], WebLazyImg.prototype, "srcset", void 0);
__decorate([
    property({ type: String })
], WebLazyImg.prototype, "sizes", void 0);
__decorate([
    property({ type: String })
], WebLazyImg.prototype, "alt", void 0);
__decorate([
    property({ type: String })
], WebLazyImg.prototype, "width", void 0);
__decorate([
    property({ type: String })
], WebLazyImg.prototype, "height", void 0);
__decorate([
    property({ type: Boolean })
], WebLazyImg.prototype, "isVisible", void 0);
__decorate([
    property({ type: Boolean })
], WebLazyImg.prototype, "loaded", void 0);
WebLazyImg = __decorate([
    customElement('web-lazy-img')
], WebLazyImg);
export { WebLazyImg };
//# sourceMappingURL=web-lazy-img.js.map