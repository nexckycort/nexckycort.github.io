import { router } from './routes'
import './components/common/global/main.scss'

window.addEventListener('load', router)
window.addEventListener('hashchange', router)
