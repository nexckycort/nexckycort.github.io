import style from './style.module.scss'

export const PortfolioPage = async () => {
  const divElement = document.createElement('div')
  divElement.classList.add(style.construction)
  divElement.innerHTML = /* html */ `<div class="${style.construction}">Comming soon</div>`
  return divElement
}
