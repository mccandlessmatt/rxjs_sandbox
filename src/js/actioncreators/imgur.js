import { SEARCH_IMGUR } from '../constants/actions'

export const searchAction = text => {
  console.log(`searching imgur ${text}`);
  return {
    type: SEARCH_IMGUR,
    text
  }
}
