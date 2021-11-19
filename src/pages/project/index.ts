import projects from '../../data/projects'

import style from './style.module.scss'

export const ProjectPage = async (slug: string) => {
  const project = projects.find((element) => element.slug === slug)

  const divElement = document.createElement('div')
  if (project === undefined) {
    divElement.innerHTML = 'not found'
    return divElement
  }
  divElement.classList.add(style.projectWrapper)
  divElement.innerHTML = /* html */ `
    <div class="${style.projectImgWrapper}">
      <img src="${project.image}" class="${style.me}" alt="me" />
      <h2 class="${style.title}">${project.title}</h2>
    </div>
    <div class="${style.projectDescriptionWrapper}">
      <p class="${style.description}">${project.description}</p>
      <a class="${style.btn}" href="${project.sourceCode}" target="_blank" rel="noopener">view source</a>
    </div>`

  return divElement
}
