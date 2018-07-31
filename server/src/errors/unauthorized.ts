import { HttpError } from './http-error'

export class Unauthorized extends HttpError {
  public getStatusCode (): number {
    return 401
  }

  public getResponseBody (): any {
    return {
      status: 'Unauthorized'
    }
  }
}
