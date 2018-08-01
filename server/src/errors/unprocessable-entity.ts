import { ValidationError } from 'class-validator'

import { HttpError } from './http-error'

export interface FieldError {
  property: string
  constraints: string[]
}

export class UnprocessableEntity extends HttpError {
  private fieldErrors: FieldError[]

  constructor (errors: FieldError[]) {
    super()
    this.fieldErrors = errors
  }

  public getStatusCode (): number {
    return 422
  }

  public getResponseBody (): any {
    return this.fieldErrors
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
