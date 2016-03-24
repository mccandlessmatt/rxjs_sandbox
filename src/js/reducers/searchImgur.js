import { SEARCH_IMGUR, IMGUR_RESULTS } from '../constants/actions'

export function imgurReducer(state = {searchText: '', results: []}, action){

  switch(action.type){
    case SEARCH_IMGUR:
      return {
        ...state,
        searchText: action.text
      }

     case IMGUR_RESULTS:
      return {
        ...state,
        results: action.results
      }
    default:
      return state
  }
}
