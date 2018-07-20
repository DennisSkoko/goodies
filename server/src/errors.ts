import { ValidationError } from 'class-validator'

export interface FieldError {
  property: string
  constraints: string[]
}

export class UnprocessableEntity extends Error {
  readonly fieldErrors: FieldError[]

  constructor (errors: FieldError[]) {
    super()
    this.fieldErrors = errors
  }

  public static makeFromClassValidatorErrors (errors: ValidationError[]) {
    return new UnprocessableEntity(
      errors.map(error => ({
        property: error.property,
        constraints: Object.values(error.constraints)
      }))
    )
  }
}

export class NotFound extends Error {}
