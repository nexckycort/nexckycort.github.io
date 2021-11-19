import projects from '../../data/projects'

import style from './style.module.scss'

export const PortfolioPage = async () => {
  const divElement = document.createElement('div')
  divElement.classList.add(style.container)
  divElement.innerHTML = /* html */ `
    <div class="${style.gallery}">
      ${projects
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
    </div>`

  return divElement
}
