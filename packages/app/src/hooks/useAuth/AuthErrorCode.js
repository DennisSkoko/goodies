const AuthErrorCode = {
  EMAIL_ALREADY_IN_USE: 'auth/email-already-in-use',
  INVALID_EMAIL: 'auth/invalid-email',
  NETWORK_REQUEST_FAILED: 'auth/network-request-failed',
  OPERATION_NOT_ALLOWED: 'auth/operation-not-allowed',
  REQUIRES_RECENT_LOGIN: 'auth/requires-recent-login',
  TO_MANY_REQUESTS: 'auth/too-many-requests',
  USER_DISABLED: 'auth/user-disabled',
  USER_NOT_FOUND: 'auth/user-not-found',
  USER_TOKEN_EXPIRED: 'auth/user-token-expired',
  WEB_STORAGE_UNSUPPORTED: 'auth/web-storage-unsupported',
  WEAK_PASSWORD: 'auth/weak-password',
  WRONG_PASSWORD: 'auth/wrong-password'
}

export default AuthErrorCode
