import { HttpError } from './http-error'

export class Forbidden extends HttpError {
  private reason?: string

  constructor (reason?: string) {
    super()
    this.reason = reason
  }

  public getStatusCode (): number {
    return 403
  }

  public getResponseBody (): any {
    return {
      status: 'Forbidden',
      reason: this.reason
    }
  }
}
