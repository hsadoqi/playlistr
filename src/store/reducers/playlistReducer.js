import ls from 'local-storage'

const initialState = {
    currentPlaylist: "",
    remotePodcasts: [], 
    savedPodcasts: ls.get('savedPodcasts') || []
}

const playlistReducer = (state = initialState, action) => {
    switch(action.type){
        case('FETCH_REMOTE'):
            return {
                ...state,
                remotePodcasts: action.payload
            }
        case('SAVE_PODCAST'):
            const newRemoteList = [...state.remotePodcasts]
            const [newSavedPodcast] = newRemoteList.splice(action.payload.source.index, 1)
            const newList = [...state.savedPodcasts, newSavedPodcast]
            ls.set('savedPodcasts', newList)
            return {
                ...state,
                remotePodcasts: newRemoteList,
                savedPodcasts: newList
            }
        case "REMOVE_PODCAST":
            const newSavedList = [...state.savedPodcasts]
            newSavedList.splice(action.payload.source.index, 1)
            ls.set('savedPodcasts', newSavedList)
            return {
                ...state,
                savedPodcasts: newSavedList
            }
        case "REORDER_PODCAST":
            const newState = [...state.savedPodcasts]
            const [reorderedPodcast] = newState.splice(action.payload.source.index, 1)
            newState.splice(action.payload.destination.index, 0, reorderedPodcast)
            ls.set('savedPodcasts', newState)
            return {
                ...state,
                savedPodcasts: newState
            }
        case "CHANGE_PLAYLIST": 
            return {
                ...state, 
                currentPlaylist: action.payload
            }
        default: 
            return state
    }
}

export default playlistReducer