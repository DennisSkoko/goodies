import { Result } from 'express-validator/check'

import { HttpError } from './http-error'

export interface FieldError {
  property: string
  constraint: string
}

export interface ValidatorError {
  location: Location,
  param: string,
  msg: any,
  value?: any
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

  public static makeFromValidatorErrors (errors: Result<ValidatorError>) {
    return new UnprocessableEntity(
      errors.array({ onlyFirstError: true })
        .map((error): FieldError => ({
          property: error.param,
          constraint: error.msg
        }))
    )
  }
}
