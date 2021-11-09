type Theme = 'light' | 'dark'

export enum THEME {
  LIGTH = 'light',
  DARK = 'dark'
}

export const selectedTheme = () => {
  const theme = (localStorage.getItem('theme') ?? THEME.LIGTH) as Theme
  const setTheme = (value: Theme) => localStorage.setItem('theme', value)
  return {
    theme,
    setTheme
  }
}
