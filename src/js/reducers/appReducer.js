import { combineReducers } from 'redux'
import {instagramReducer as instagram} from './searchInstagram'

const reducer = combineReducers({
  instagram
})

export default reducer;
