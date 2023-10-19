import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import "@klingen/location-search"

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
      <h1>🔥 Worship klingen 🔥</h1>
      </br></br>
      <b>Du har behovet for Klingen sin evige visdom, og du har vendt deg hit.</b>
      <p>API'et må returnere data på følgende format</p>

      <code>
        [
          {
            "name": "Fåberg",
            "county": "Lillehammer",
            "countryPart": "Innlandet"
          }
        ]
      </code>
      </br></br>
      <location-search queryParamName="search" backendUrl="https://example.com"></location-search>
`
  }


  static styles = css`
    :host {
      color: white;
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
      background-color: #449;
    }

    
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
