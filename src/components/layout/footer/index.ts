import socialMedia from '../../../data/socialMedia.json'

import { footer } from '../../../lang/es.json'

import style from './style.module.scss'

const Footer = () => {
  const footerElement = document.createElement('footer')
  footerElement.classList.add(style.footer)
  footerElement.innerHTML = /* html */ `
  <div class="${style.body}">
    <div>
      <ul class="${style.socialMedia}">
        ${socialMedia
          .map(({ id, name, url }) => {
            return `
            <li id="${id}">
              <a class="${style.mediaLink} lined-link" href="${url}" target="_blank" rel="noopener noreferrer">
                ${name}
              </a>
            </li>`
          })
          .join('')}
      </ul>
    </div>
    <div>
      <p class="${style.quote}" data-section="footer" data-value="quote">${footer.quote}</p>
      <a class="${
        style.btnContactMe
      }" href="mailto:nexckycort@gmail.com" data-section="footer" data-value="contactMe">${footer.contactMe}</a>
    </div>
  </div>`

  return footerElement
}
export default Footer
