import home from '../view/home.html'

export default () => {
  const divElement = document.createElement('div')
  divElement.classList.add('container', 'pr-0', 'mr-0')
  divElement.innerHTML = home

  return divElement
}