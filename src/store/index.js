import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import playlistReducer from './reducers/playlistReducer'

const rootReducer = combineReducers({
    playlists: playlistReducer
})

const store = createStore(rootReducer, compose(applyMiddleware(thunk), composeWithDevTools()))

export default store