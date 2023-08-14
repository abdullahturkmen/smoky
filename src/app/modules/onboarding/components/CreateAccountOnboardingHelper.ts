import * as Yup from 'yup'

export interface ICreateAccount {
  fullName: string
  companyName: string
  websiteUrl: string
}

const createAccountSchemas = [
  Yup.object({
    fullName: Yup.string().required().label('Full Name'),
  }),
  Yup.object({
    companyName: Yup.string().required().label('Company Name'),
  }),
  Yup.object({
    websiteUrl: Yup.string().required().label('Website URL'),
  }),
]

const inits: ICreateAccount = {
  fullName: '',
  companyName: '',
  websiteUrl: '',
}

export {createAccountSchemas, inits}
