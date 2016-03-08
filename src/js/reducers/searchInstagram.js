import { SEARCH_INSTAGRAM } from '../constants/actions'

export function instagramReducer(state = {searchText: ''}, action){

  switch(action.type){
    case SEARCH_INSTAGRAM:
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
