// action creators
const remotePodcasts = (podcasts) => ({type: "FETCH_REMOTE", payload: podcasts})
const savedPodcast = (podcast) => ({type: 'SAVE_PODCAST', payload: podcast })

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

export const savePodcast = (podcast) => {
    return (dispatch) => dispatch(savedPodcast(podcast))
}