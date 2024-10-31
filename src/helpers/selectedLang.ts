type Lang = 'es' | 'en'

export enum LANGUAGE {
  ES = 'es',
  EN = 'en'
}

export const selectedLanguage = () => {
  const language = (localStorage.getItem('lang') ?? 'es') as Lang

  const setLanguage = (lang: Lang) =>
    localStorage.setItem('lang', lang.toLowerCase())

  const textsToChange = document.querySelectorAll(
    '[data-section]'
  ) as unknown as HTMLElement[]

  const changeLanguage = async (lang = language) => {
    const texts = await import(`../lang/${lang}.json`).then(
      (module) => module.default
    )

    for (const textToChange of textsToChange) {
      const section = textToChange.dataset.section as string
      const value = textToChange.dataset.value as string
      textToChange.textContent = texts[section][value]
    }
  }
  return {
    language,
    setLanguage,
    changeLanguage
  }
}
