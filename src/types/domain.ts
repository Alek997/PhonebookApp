export interface ContactDto {
  id: string
  name: string
  phone: string
  sex: 'male' | 'female' | 'other'
  country: string
  code: string
  color?: string
}

export interface CountryDto {
  name: string
  callingCodes: string[]
}

export interface Country {
  label: string
  value: string
  callingCodes: string[]
}
