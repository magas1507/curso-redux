import { combineReducers } from 'redux'
import dataReducer from '../slices/dataSlice'
import uiReducer from '../slices/uiSlice'
import searchReducer from '../slices/searchSlice'

const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
  search: searchReducer,
})

export default rootReducer;