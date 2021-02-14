import home from '../pages/home.html'
import homeService from '../services/home.service'

export default async (): Promise<HTMLDivElement> => {
  const repos = await homeService.getRepositories()

  const divElement = document.createElement('div')
  divElement.classList.add('row')
  divElement.insertAdjacentHTML('afterbegin', home)

  const reposElement = divElement.querySelector('#repos')

  if (reposElement !== null) {
    repos.forEach((repo) => {
      const { url, name, description } = repo

      const card = /* html */ `<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
        <a href="${url}" target="_blank">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${description}</p>
            </div>
          </div>
        </a>
      </div>`

      reposElement.insertAdjacentHTML('beforeend', card)
    })
  }

  return divElement
}
