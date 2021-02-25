interface ContactDto {
  id: string
  name: string
  phone: string
  sex: 'male' | 'female' | 'other'
  country: string
  code: string
}

export const contacts: ContactDto[] = [
  {
    id: '1',
    name: 'Alek',
    phone: '0644750787',
    sex: 'male',
    country: 'Serbia',
    code: '+381'
  },
  {
    id: '2',
    name: 'Alek2',
    phone: '0644750787',
    sex: 'male',
    country: 'Serbia',
    code: '+381'
  },
  {
    id: '3',
    name: 'Alek3',
    phone: '0644750787',
    sex: 'male',
    country: 'Serbia',
    code: '+381'
  }
]
