import { HttpError } from './http-error'

export class BadRequest extends HttpError {
  public getStatusCode (): number {
    return 400
  }

  public getResponseBody (): any {
    return {
      status: 'Bad Request'
    }
  }
}
