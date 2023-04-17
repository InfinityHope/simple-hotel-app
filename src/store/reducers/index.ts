import { combineReducers } from 'redux'
import { favoritesReducer } from './favorite.reducer'
import { hotelsReducer } from './hotels.reducer'
import { searchParamsReducer } from './searchParams.reducer'

const reducer = combineReducers({
	hotelsReducer,
	favoritesReducer,
	searchParamsReducer
})

export default reducer
