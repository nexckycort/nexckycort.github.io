import { pages } from './controllers'
import './sass/main.scss'

const init = () => {
  const content = document.getElementById('root')
  content.appendChild(pages.home())
}

window.addEventListener('load', init)