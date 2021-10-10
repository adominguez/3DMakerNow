export const windowGlobal = typeof window !== 'undefined' && window

export const amazonTag = '3dmakernow-21'

export const createAmazonUrl = (asin) => `https://www.amazon.es/dp/${asin}?tag=${amazonTag}&linkCode=osi&th=1&psc=1`