import { IAddress } from './IAddress'
import { ICompany } from './ICompnay'

export interface IUser {
  id: number
  name: string
  email: string
  username?: string
  address?: IAddress
  phone?: string
  website?: string
  company?: ICompany
}
