import * as homeModel from '../models/home.model'

export default {
  repos: async () => {
    const { data } = await homeModel.repos()

    const result = data
      .filter((repo) => (repo.description !== null && repo.description.includes('🛡️')))
      .sort((a, b) => b.description.length - a.description.length)
      .map((repo) => {
        const { html_url: url } = repo
        const name = repo.name.split('-').map(part => part[0].toUpperCase() + part.slice(1)).join(' ')
        const description = repo.description.slice(0, -3)
        return {
          url,
          name,
          description
        }
      })
    return result
  }
}