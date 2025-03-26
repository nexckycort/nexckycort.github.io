export const toPage = (page: string) => (event: Event) => {
  event.preventDefault()
  window.history.pushState(null, '', page)
}
