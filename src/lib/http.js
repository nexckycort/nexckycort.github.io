const baseURL = 'https://api.github.com'

const headers = {
  'Content-Type': 'application/json'
}

const get = async (url) => {
  const response = await fetch([baseURL, url].join('/'), {
    method: 'GET',
    headers
  })
  const resp = await response.json()

  const data = {
    status: response.status,
    data: resp
  }
  return data
}

export default {
  get
}
