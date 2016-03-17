import { combineReducers } from 'redux'
import {imgurReducer as imgur} from './searchImgur'

const reducer = combineReducers({
  imgur
})

export default reducer;
