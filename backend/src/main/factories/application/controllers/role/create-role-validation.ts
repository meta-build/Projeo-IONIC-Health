import {
  RequiredFieldValidation,
  Validation,
  ValidationComposite
} from '@/application/validation'

export const makeCreateRoleValidation = (): ValidationComposite => {
  const validations: Validation[] = []

  for (const field of ['name']) {
    validations.push(new RequiredFieldValidation(field))
  }

  return new ValidationComposite(validations)
}
