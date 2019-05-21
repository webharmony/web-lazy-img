import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('web-lazy-img')
export class WebLazyImg extends LitElement {
  @property({ type: String }) preload = '';
  @property({ type: String }) src = '';
  @property({ type: String }) srcset = '';
  @property({ type: String }) sizes = '';
  @property({ type: String }) alt = '';
  @property({ type: String }) width = '100%';
  @property({ type: String }) height = '100%';
  @property({ type: Boolean }) isVisible = false;
  @property({ type: Boolean }) loaded = false;

  private intersection: IntersectionObserver = new IntersectionObserver((ent) => {

    if (ent[0].isIntersecting){
      this.isVisible = ent[0].isIntersecting;
      this.intersection.unobserve(this);
    }
  });

  static get styles(){
    return css`
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

  firstUpdated(){
    this.intersection.observe(this);
  }

  render() {
    return html`<img class="${this.loaded ? '' : 'preload'}" src="${ this.isVisible ? this.src : this.preload }"
                  alt="${this.alt}" width="${this.width}" height=${this.height} sizes="${this.sizes}"
                  srcset="${this.srcset}" @load=${() => {this.loaded = true; }}/>`;
  }
}