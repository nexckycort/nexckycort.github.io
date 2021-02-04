import { pages } from './controllers'
import './sass/main.scss'

const init = async (): Promise<void> => {
  const content = document.getElementById('root')
  if (content !== null) {
    content.appendChild(await pages.home())
  }
}

// eslint-disable-next-line @typescript-eslint/no-misused-promises
window.addEventListener('load', init)
