import { pages } from './controllers'
import './sass/main.scss'

const init = async () => {
  const content = document.getElementById('root')
  content.appendChild(await pages.home())
}

window.addEventListener('load', init)