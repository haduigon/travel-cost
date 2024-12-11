export type Travel = {
  name: string,
  place: string,
  date: string,
  team: string,
  budget: string,
  description: string,
  statistics: string,
  graphics: string,
  comments: string,
  image: string,
}

export type User = {
  name: string,
  surname: string,
  email: string,
  image: string,
  about: string,
  age: string,
  phone: string,
}

export type Settings = {
  currency: string,
  lang: string,
  notifications: boolean,
  blacklist: string[],
  about: string,
  oldPassword: string,
  newPassword: string,
}