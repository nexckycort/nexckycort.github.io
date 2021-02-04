const baseURL = 'https://api.github.com'

const headers = {
  'Content-Type': 'application/json'
}

const get = async <T>(url: string):Promise<T> => {
  const response = await fetch([baseURL, url].join('/'), {
    method: 'GET',
    headers
  })
  const resp = await response.json()

  return resp as T
}

export default {
  get
}
