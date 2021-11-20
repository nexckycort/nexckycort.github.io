import contactImage from '../../assets/img/contact.svg'

import socialMedia from '../../data/socialMedia.json'

import { footer } from '../../lang/es.json'

import style from './style.module.scss'

export const ContactPage = async () => {
  const divElement = document.createElement('div')
  divElement.classList.add(style.footer)
  divElement.innerHTML = /* html */ `
  <div class="${style.wrapperImage}">
    <img class="${style.image}" src="${contactImage}" alt="contact image" />
  </div>
  <div class="${style.body}">
    <h1 class="${style.contactTitle}" data-section="footer" data-value="contactMe">${footer.contactMe}</h1>
    <p class="${style.quote}" data-section="footer" data-value="quote">${footer.quote}</p>
    <div>
      ${socialMedia
        .map(({ url, name }) => {
          return `
          <a class="${style.mediaLink} lined-link" href="${url}" target="_blank" rel="noopener noreferrer">
            ${name}
          </a>`
        })
        .join('')}
    </div>
    <a class="${
      style.btnContactMe
    }" href="mailto:nexckycort@gmail.com" data-section="footer" data-value="btnContactMe">${footer.contactMe}</a>
  </div>`

  return divElement
}
