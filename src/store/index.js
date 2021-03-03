import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import playlistReducer from './reducers/playlistReducer'

const rootReducer = combineReducers({
    playlists: playlistReducer
})

