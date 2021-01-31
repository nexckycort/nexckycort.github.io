import home from '../view/home.html'

export default () => {
  const divElement = document.createElement('div')
  divElement.classList.add('row')
  divElement.innerHTML = home

  return divElement
}