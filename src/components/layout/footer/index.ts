import { footer } from '../../../lang/es.json'

import style from './style.module.scss'

const Footer = () => {
  const footerElement = document.createElement('footer')
  footerElement.classList.add(style.footer)
  footerElement.innerHTML = /* html */ `
  <div class="${style.poweredBy}">
    <p data-section="footer" data-value="poweredBy">${footer.poweredBy}</p>
  </div>`

  return footerElement
}
export default Footer
