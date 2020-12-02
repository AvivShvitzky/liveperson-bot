import superagent from 'superagent'

const apiUrl = 'https://restcountries.eu/rest/v2/'

const responseBody = res => res.body
const requests = {
  get: url => {
    return superagent
            .get(`${apiUrl}${url}`)
            .then(responseBody)
            .catch(err => err)
  }
}

export const countriesAPI = {
  /**
   * Returns information about all countries.
  */
  countries() {
    return requests.get(`all`)
   }
}


