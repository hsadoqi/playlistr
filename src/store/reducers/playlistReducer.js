const initialState = {
    remotePodcasts: [], 
    savedPodcasts: []
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
            return {
                remotePodcasts: newRemoteList,
                savedPodcasts: [...state.savedPodcasts, newSavedPodcast]
            }
        case "REMOVE_PODCAST":
            const newSavedList = [...state.savedPodcasts]
            newSavedList.splice(action.payload.source.index, 1)
            return {
                ...state,
                savedPodcasts: newSavedList
            }
        case "REORDER_PODCAST":
            const newState = [...state.savedPodcasts]
            const [reorderedPodcast] = newState.splice(action.payload.source.index, 1)
            newState.splice(action.payload.destination.index, 0, reorderedPodcast)
            return {
                ...state,
                savedPodcasts: newState
            }

        default: 
            return state
    }
}

export default playlistReducer