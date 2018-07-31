import { HttpError } from './http-error'

export class NotFound extends HttpError {
  public getStatusCode (): number {
    return 404
  }

  public getResponseBody (): any {
    return {
      status: 'Not Found'
    }
  }
}
