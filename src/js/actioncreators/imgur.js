import { SEARCH_IMGUR, IMGUR_RESULTS } from '../constants/actions'

export const searchAction = text => {
  console.log(`searching imgur ${text}`);
  return {
    type: SEARCH_IMGUR,
    text
  }
}

export const updateResults = results => {
  return {
    type: IMGUR_RESULTS,
    results
  }
}
