export abstract class HttpError extends Error {
  public abstract getStatusCode (): number
  public abstract getResponseBody (): any
}
