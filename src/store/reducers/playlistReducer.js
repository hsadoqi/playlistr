const initialState = {
    remotePodcasts: [], 
    savedPodcasts: []
}

const playlistReducer = (state = initialState, action) => {
    switch(action.type){
        case('FETCH_REMOTE'):
            return {...state, remotePodcasts: action.payload}
        case('SAVE_PODCAST'):
            return {
                ...state, 
                savedPodcasts: [...state.savedPodcasts, action.payload]
            }
        default: 
            return state
    }
}

export default playlistReducer