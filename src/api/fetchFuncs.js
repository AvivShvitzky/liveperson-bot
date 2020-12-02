import { countriesAPI } from './api'

export async function fetchCountries() {
  const countriesData = await countriesAPI.countries()
  return countriesData
}
