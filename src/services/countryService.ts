import axios from 'axios'
import { CountryDto } from '../types/domain'

export const fetchCountries = async () => {
  console.log('fetcCountries')
  const { data } = await axios.get<CountryDto[]>(
    'https://restcountries.eu/rest/v2/all?fields=name'
  )
  return data
}
