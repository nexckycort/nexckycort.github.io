import './components/common/global/main.scss'
import { router } from './routes'

const originalPushState = window.history.pushState

window.addEventListener('load', router)
window.addEventListener('popstate', router)

window.history.pushState = function (state, title, url) {
  originalPushState.apply(this, [state, title, url])

  router()
}
