import style from './style.module.scss'

import { profile } from '../../lang/es.json'

export const AboutMePage = async () => {
  const me = await import('../../../public/me.jpg').then((module) => module.default)

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
      <a class="${style.resume}" href="https://bit.ly/3FZSVca" target="_blank" rel="noopener" data-section="profile" data-value="cv">${profile.cv}</a>
    </div>`

  return divElement
}
