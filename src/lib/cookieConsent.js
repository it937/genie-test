'use client'

export const COOKIE_CONSENT_STORAGE_KEY = 'genie-cookie-consent'
export const COOKIE_CONSENT_COOKIE_NAME = 'genie-cookie-consent'
export const DEVICE_ID_STORAGE_KEY = 'genie-device-id'
export const COOKIE_CONSENT_ACCEPTED = 'accepted'

export function getStoredCookieConsent () {
  if (typeof window === 'undefined' || !window.localStorage) {
    return null
  }

  const value = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)

  if (value === COOKIE_CONSENT_ACCEPTED) {
    return value
  }

  if (value !== null) {
    window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY)
  }

  return null
}

export function persistCookieConsent (value) {
  if (typeof window === 'undefined') {
    return
  }

  if (window.localStorage) {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value)
  }

  document.cookie = `${COOKIE_CONSENT_COOKIE_NAME}=${value}; path=/; max-age=${60 * 60 * 24 * 180}; SameSite=Lax`
}

export function clearStoredCookieConsent () {
  if (typeof window === 'undefined') {
    return
  }

  if (window.localStorage) {
    window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY)
  }

  document.cookie = `${COOKIE_CONSENT_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; SameSite=Lax`
}

export function hasAcceptedCookieConsent () {
  return getStoredCookieConsent() === COOKIE_CONSENT_ACCEPTED
}

export function clearClientReadableCookies () {
  if (typeof document === 'undefined') {
    return
  }

  const cookies = document.cookie ? document.cookie.split(';') : []

  cookies.forEach(cookieEntry => {
    const [rawName] = cookieEntry.split('=')
    const name = rawName?.trim()

    if (!name) {
      return
    }

    const hostname = window.location.hostname
    const domainParts = hostname.split('.').filter(Boolean)
    const candidateDomains = [undefined]

    for (let i = 0; i < domainParts.length - 1; i += 1) {
      candidateDomains.push(`.${domainParts.slice(i).join('.')}`)
    }

    candidateDomains.forEach(domain => {
      const domainAttribute = domain ? ` domain=${domain};` : ''

      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;${domainAttribute} SameSite=Lax`
    })
  })
}
