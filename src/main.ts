import { pages } from './app/controllers'
import './styles.scss'

const init = async (): Promise<void> => {
  const content = document.getElementById('root')
  if (content !== null) {
    content.classList.add('container')
    content.appendChild(await pages.home())
  }
}

// eslint-disable-next-line @typescript-eslint/no-misused-promises
window.addEventListener('load', init)
