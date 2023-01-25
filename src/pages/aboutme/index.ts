import style from './style.module.scss'

import { profile } from '../../lang/es.json'

export const AboutMePage = async () => {
  const me = await import('../../../public/me.png').then((module) => module.default)

  const divElement = document.createElement('div')
  divElement.classList.add(style.aboutMeWrapper)
  divElement.innerHTML = /* html */ `
    <div class="${style.meWrapper}">
      <img src="${me}" class="${style.me}" alt="me" />
      <h2 class="${style.rol} data-section="profile" data-value="rol"">${profile.rol}</h2>
    </div>
    <div class="${style.aboutMe}">
      <h1 class="${style.title}" data-section="profile" data-value="title">${profile.title}</h1>
      <p class="${style.description}" data-section="profile" data-value="description">${profile.description}</p>
      <a class="${style.resume}" id="btnModalViewCV" rel="noopener" data-section="profile" data-value="cv">${profile.cv}</a>
    </div>
    <div id="modalViewCV" class="${style.modal}">
      <div class="${style.modalContent}">
        <span class="${style.modalClose}">&times;</span>
        <iframe class="${style.cv}" src="https://drive.google.com/file/d/1NU44MD0QEHZ9XSHlh1pQsLwqunrMn5t3/preview"></iframe>
      </div>
    </div>`

  const modalElement = divElement.querySelector('#modalViewCV') as HTMLElement
  const btnModalViewCVElement = divElement.querySelector('#btnModalViewCV') as Element

  btnModalViewCVElement.addEventListener('click', (e) => {
    e.preventDefault()
    modalElement.style.display = 'block'
  })

  const closeModalElement = divElement.getElementsByClassName(style.modalClose)[0]
  closeModalElement.addEventListener('click', (e) => {
    e.preventDefault()
    modalElement.style.display = 'none'
  })

  window.onclick = function (event) {
    if (event.target === modalElement) {
      modalElement.style.display = 'none'
    }
  }

  return divElement
}
