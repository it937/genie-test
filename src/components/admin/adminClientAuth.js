export const ADMIN_TOKEN_KEY = 'admin_token'
export const ADMIN_IDLE_LIMIT_MS = 30 * 60 * 1000

export function getAdminToken() {
  if (typeof window === 'undefined') {
    return null
  }

  return window.localStorage.getItem(ADMIN_TOKEN_KEY)
}

export function setAdminToken(token) {
  window.localStorage.setItem(ADMIN_TOKEN_KEY, token)
}

export function clearAdminToken() {
  window.localStorage.removeItem(ADMIN_TOKEN_KEY)
}

export function authHeaders() {
  const token = getAdminToken()

  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {}
}
