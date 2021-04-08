/* eslint-disable linebreak-style */
/* eslint-disable eol-last */

// Pure functions
export function capitalize(string) {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}