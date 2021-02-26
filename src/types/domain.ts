export interface ContactDto {
  id: string
  name: string
  phone: string
  sex: 'male' | 'female' | 'other'
  country: string
  code: string
  color?: string
}
