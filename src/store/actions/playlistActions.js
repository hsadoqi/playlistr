// action creators
const remote = (podcasts) => ({type: "FETCH_REMOTE", payload: podcasts})
const save = (result) => ({type: 'SAVE_PODCAST', payload: result})
const drag = (result) => ({type: "REORDER_PODCAST", payload: result})
const remove = (result) => ({type: "REMOVE_PODCAST", payload: result})
const change = (playlist) => ({type: "CHANGE_PLAYLIST", payload: playlist})

// thunk functions 

export const fetchRemote = () => {
    return (dispatch) => {
        fetch(`https://gist.githubusercontent.com/CervantesVive/3f85bf26672cf27fe1cd932ffcb7ecac/raw/4de50b351a62158083a97f3b950bd786d3ffd928/awesome-podcasts.json`)
        .then(res => res.json())
        .then(data => {
            dispatch(remote(data.podcasts))
        })
    }
}

export const savePodcast = (result) => {
    return (dispatch) => dispatch(save(result))
}

export const handleOnDragEnd = (result) => {
    return (dispatch) => dispatch(drag(result))
}

export const removePodcast = (result) => {
    return (dispatch) => dispatch(remove(result))
}

export const changePlaylist = (playlist) => {
    return (dispatch) => dispatch(change(playlist))
}