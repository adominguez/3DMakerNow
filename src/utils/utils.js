export const windowGlobal = typeof window !== 'undefined' && window

export const amazonTag = '3dmakernow-21'

export const createAmazonUrl = asin =>
  `https://www.amazon.es/dp/${asin}?tag=${amazonTag}&linkCode=osi&th=1&psc=1`

export const capitalize = str => str ? str.charAt(0).toUpperCase() + str.slice(1) : null

export const isOdd = (num) => num % 2