// action creators
const remotePodcasts = (podcasts) => ({type: "FETCH_REMOTE", payload: podcasts})
const savedPodcast = (result) => ({type: 'SAVE_PODCAST', payload: result})
const dragPodcast = (result) => ({type: "REORDER_PODCAST", payload: result})
const removePodcast = (result) => ({type: "REMOVE_PODCAST", payload: result})

// thunk functions 

export const fetchRemote = () => {
    return (dispatch) => {
        fetch(`https://gist.githubusercontent.com/CervantesVive/3f85bf26672cf27fe1cd932ffcb7ecac/raw/4de50b351a62158083a97f3b950bd786d3ffd928/awesome-podcasts.json`)
        .then(res => res.json())
        .then(data => {
            dispatch(remotePodcasts(data.podcasts))
        })
    }
}

export const savePodcast = (result) => {
    return (dispatch) => dispatch(savedPodcast(result))
}

export const handleOnDragEnd = (result) => {
    return (dispatch) => dispatch(dragPodcast(result))
}

export const removePodcastFromSaved = (result) => {
    return (dispatch) => dispatch(removePodcast(result))
}