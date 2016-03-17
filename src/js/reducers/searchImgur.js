import { SEARCH_IMGUR } from '../constants/actions'

export function imgurReducer(state = {searchText: ''}, action){

  switch(action.type){
    case SEARCH_IMGUR:
      let newState = {
        ...state,
        searchText: action.text
      }

      return newState;
      break;

    default:
      return state
  }
}
