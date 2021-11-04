import { SunIcon, MoonIcon } from '../../icons'

import style from './style.module.scss'

type Theme = 'light' | 'dark'

const Navbar = () => {
  const selectedTheme = () => (localStorage.getItem('theme') ?? 'light') as Theme

  const toggleThemeIcon = () => {
    const theme = selectedTheme()
    if (theme === 'dark') document.body.classList.toggle('dark')
    return theme === 'light' ? MoonIcon : SunIcon
  }

  const navElement = document.createElement('nav')
  navElement.innerHTML = /* html */ `
    <div class="${style.navLogo}">
      <img src="" alt="" />
    </div>
    <div>
      <ul class="${style.navbarNav}">
        <li class="${style.navItem}"><a class="${style.navLink}" href="#">Sobre mi</a></li>
        <li class="${style.navItem}"><a class="${style.navLink}" href="#/works">Portafolio</a></li>
      </ul>
    </div>
    <button id="toggleTheme">
      ${toggleThemeIcon()}
    </button>
`

  const toggleTheme = navElement.querySelector('#toggleTheme') as Element
  toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    const theme = selectedTheme()
    if (theme === 'light') {
      toggleTheme.innerHTML = SunIcon
      localStorage.setItem('theme', 'dark')
      return
    }
    toggleTheme.innerHTML = MoonIcon
    localStorage.setItem('theme', 'light')
  })

  return navElement
}

export default Navbar
