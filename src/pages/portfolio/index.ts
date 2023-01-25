import projects from '../../data/projects'

import style from './style.module.scss'

import { portfolio } from '../../lang/es.json'

export const PortfolioPage = async () => {
  const divElement = document.createElement('div')
  divElement.innerHTML = /* html */ `
    <h1 class="${style.title}" data-section="portfolio" data-value="title">${portfolio.title}</h1>
    <div class="${style.container}">
      <div class="${style.gallery}">
        ${projects
          .filter((project) => project.notShow === undefined)
          .map(({ slug, image, title }) => {
            return `
              <div class="${style.wrapperImage}">
                <a href="#/works/${slug}">
                  <span class="${style.workTitle}">${title}</span>
                </a>
                <img class="${style.workImage}" src="${image}" alt="${title}" />
              </div>`
          })
          .join('')}
      </div>
    <div>
    `

  return divElement
}
