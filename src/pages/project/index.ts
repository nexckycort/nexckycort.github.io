import projects from '../../data/projects'

import style from './style.module.scss'

import { portfolio } from '../../lang/es.json'

export const ProjectPage = async (slug: string) => {
  const project = projects.find((element) => element.slug === slug)

  const divElement = document.createElement('div')
  if (project === undefined) {
    // TODO: add view not found
    divElement.innerHTML = 'not found'
    return divElement
  }
  divElement.classList.add(style.projectWrapper)
  divElement.innerHTML = /* html */ `
    <div class="${style.projectImgWrapper}">
      <img src="${project.image}" class="${style.image}" alt="me" />
      <h2 class="${style.title}">${project.title}</h2>
    </div>
    <div class="${style.projectDescriptionWrapper}">
      <p class="${style.description}" data-section="${project.slug}" data-value="description">${project.description}</p>
      ${
        project.sourceCode === null
          ? ''
          : `<a class="${style.btn}" href="${project.sourceCode}" target="_blank" rel="noopener" data-section="portfolio" data-value="btnSourceCode">${portfolio.btnSourceCode}</a>`
      }
      ${
        project.demoView === null
          ? ''
          : `<a class="${style.btn}" href="${project.demoView}" target="_blank" rel="noopener" data-section="portfolio" data-value="btnViewDemo">${portfolio.btnViewDemo}</a>`
      }
    </div>`

  return divElement
}
