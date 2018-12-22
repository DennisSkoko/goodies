const STORAGE_KEY = 'goodies/jwt-token'

const storage = window.sessionStorage

export default {
  get () {
    return storage.getItem(STORAGE_KEY)
  },

  set (value) {
    storage.setItem(STORAGE_KEY, value)
  },

  remove () {
    storage.removeItem(STORAGE_KEY)
  }
}
