import home from '../view/home.html'
import homeService from '../services/home.service'

export default async () => {
  const repos = await homeService.repos()

  const data = repos
    .map((repo) => {
      const { url, name, description } = repo
      return /* html */`<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
            <a href="${url}" target="_blank">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">${description}</p>
                </div>
              </div>
            </a>
          </div>`
    }).join('')

  const divElement = document.createElement('div')
  divElement.classList.add('row')

  divElement.innerHTML = home

  const reposElement = divElement.querySelector('#repos')
  reposElement.innerHTML = data

  return divElement
}