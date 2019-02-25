// Removes a warning from firebase sdk regarding this variable being undefined
process.env.FIREBASE_CONFIG = '{}'

// We never want output to the stdout/stderr
jest.mock('../src/api/logger')
