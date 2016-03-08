import { SEARCH_INSTAGRAM } from '../constants/actions'

export const searchAction = text => {
  console.log(`searching instagram ${text}`);
  return {
    type: SEARCH_INSTAGRAM,
    text
  }
}
