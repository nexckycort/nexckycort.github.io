import { LANGUAGE, selectedLanguage } from '../../../helpers/selectedLang'
import { THEME, selectedTheme } from '../../../helpers/selectedTheme'
import { ContactIcon, MoonIcon, SunIcon, UserIcon } from '../../icons'

import style from './style.module.scss'

const selectNavLink = (navElement: HTMLElement) => {
  const navLinks = navElement.querySelectorAll(
    '.lined-link'
  ) as unknown as Element[]
  for (const navLink of navLinks) {
    navLink.addEventListener('click', () => {
      if (!navLink.classList.contains('active')) {
        navElement
          .querySelector('.lined-link.active')
          ?.classList.remove('active')
        navLink.classList.add('active')
      }
    })
  }
}

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

const routes = [
  {
    name: 'Sobre mi',
    path: '#',
    icon: UserIcon,
    key: 'aboutMe'
  },
  {
    name: 'Contáctame',
    path: '#/contact',
    icon: ContactIcon,
    key: 'contact'
  }
]

const Navbar = () => {
  const currentPath = location.hash === '' ? '#' : location.hash

  const toggleThemeIcon = () => {
    const { theme } = selectedTheme()
    if (theme === 'dark') document.body.classList.toggle('dark')
    return theme === 'light' ? MoonIcon : SunIcon
  }

  const isActive = (path: string) => {
    return currentPath === path ? 'active' : ''
  }

  const { language } = selectedLanguage()

  const navElement = document.createElement('nav')
  navElement.classList.add(style.nav)
  navElement.innerHTML = /* html */ `
    <div>
      <ul class="${style.navbarNav}">
        <li class="${style.navItem}">
          ${routes
            .map(({ path, icon, key, name }) => {
              return /* html */ `<a class="${style.navLink} ${isActive(
                path
              )} lined-link" href="${path}">
                ${icon}<span data-section="navbar" data-value="${key}">${name}</span>
              </a>`
            })
            .join('')}
        </li>
      </ul>
    </div>
    <div class="${style.wrapperLangTheme}">
      <button id="lang" class="${style.lang}" aria-label="btn lang">
        ${language}
      </button>
      <button id="toggleTheme" class="${style.toggleTheme}" aria-label="btn toggle theme">
        ${toggleThemeIcon()}
      </button>
    </div>
`

  selectNavLink(navElement)
  selectTheme(navElement)
  selectLanguage(navElement)

  return navElement
}

export default Navbar
