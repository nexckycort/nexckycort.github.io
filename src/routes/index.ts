import { Footer, Navbar } from '../components/layout'

import { PortfolioPage } from '../pages/portfolio'
import { AboutMePage } from '../pages/aboutme'

import { selectedLanguage } from '../helpers/selectedLang'

export const routes = {
  '/': AboutMePage,
  works: PortfolioPage
}

export const router = async () => {
  const header = document.getElementById('header') as HTMLElement
  const content = document.getElementById('content') as HTMLElement
  const footer = document.getElementById('footer') as HTMLElement

  if (header.childNodes.length === 0 && footer.childNodes.length === 0) {
    header.append(Navbar())
    footer.append(Footer())
  }

  const hash = (location.hash.slice(1).toLowerCase().split('/')[1] ?? '/') as '/' | 'works'

  content.innerHTML = ''
  content.append(await routes[hash]())

  const { changeLanguage } = selectedLanguage()
  await changeLanguage()
}
