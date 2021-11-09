import me from '../../assets/me.jpg'

import style from './style.module.scss'

import { aboutMe } from '../../lang/es.json'

export const AboutMePage = () => {
  return /* html */ `<div class="${style.aboutMeWrapper}">
    <figure class="${style.meWrapper}">
      <img src="${me}" class=${style.me} alt="me" />
      <h2 class="${style.subTitle} data-section="aboutMe" data-value="subTitle"">${aboutMe.subTitle}</h2>
    </figure>
    <div class="${style.aboutMe}">
      <h1 data-section="aboutMe" data-value="title">${aboutMe.title}</h1>
      <p data-section="aboutMe" data-value="description">${aboutMe.description}</p>
      <a href="https://bit.ly/3FZSVca" target="_blank" data-section="aboutMe" data-value="cv">${aboutMe.cv}</a>
    </div>
  </div>`
}
