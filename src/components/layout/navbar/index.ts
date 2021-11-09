import { LANGUAGE, selectedLanguage } from '../../../helpers/selectedLang'
import { selectedTheme, THEME } from '../../../helpers/selectedTheme'

import { SunIcon, MoonIcon, UserIcon, BriefcaseIcon } from '../../icons'

import style from './style.module.scss'

const selectTheme = (navElement: HTMLElement) => {
  const toggleTheme = navElement.querySelector('#toggleTheme') as Element
  toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    const { theme, setTheme } = selectedTheme()
    if (theme === THEME.LIGTH) {
      toggleTheme.innerHTML = SunIcon
      setTheme(THEME.DARK)
      return
    }
    toggleTheme.innerHTML = MoonIcon
    setTheme(THEME.LIGTH)
  })
}

const selectLanguage = (navElement: HTMLElement) => {
  const langElement = navElement.querySelector('#lang') as Element
  langElement.addEventListener('click', () => {
    const { language, setLanguage, changeLanguage } = selectedLanguage()
    let lang!: LANGUAGE
    if (language === LANGUAGE.ES) lang = LANGUAGE.EN
    else lang = LANGUAGE.ES

    langElement.innerHTML = lang
    setLanguage(lang)
    void changeLanguage(lang)
  })
}

const Navbar = () => {
  const toggleThemeIcon = () => {
    const { theme } = selectedTheme()
    if (theme === 'dark') document.body.classList.toggle('dark')
    return theme === 'light' ? MoonIcon : SunIcon
  }

  const { language } = selectedLanguage()

  const navElement = document.createElement('nav')
  navElement.classList.add(style.nav)
  navElement.innerHTML = /* html */ `
    <div>
      <ul class="${style.navbarNav}">
        <li class="${style.navItem}">
          <a class="${style.navLink}" class="lined-link" href="#">
            ${UserIcon}<span data-section="navbar" data-value="aboutMe">Sobre mi</span>
          </a>
        </li>
        <li class="${style.navItem}">
          <a class="${style.navLink}" href="#/works">
            ${BriefcaseIcon}<span data-section="navbar" data-value="portfolio">Portafolio</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="${style.wrapperLangTheme}">
      <button id="lang" class="${style.lang}" name="btn lang">
        ${language}
      </button>
      <button id="toggleTheme" class="${style.toggleTheme}" name="btn toggle theme">
        ${toggleThemeIcon()}
      </button>
    </div>
`

  selectTheme(navElement)
  selectLanguage(navElement)

  return navElement
}

export default Navbar
