/* eslint-disable @typescript-eslint/no-misused-promises */
import { router } from './routes'
import './components/global/main.scss'

window.addEventListener('load', router)
window.addEventListener('hashchange', router)
