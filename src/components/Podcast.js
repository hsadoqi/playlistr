import './Podcast.css'
import { Draggable } from 'react-beautiful-dnd'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changePlaylist } from '../store/actions/playlistActions'

const useAudio = props => {
    const [audio] = useState(new Audio(props.podcast.audio))
    const [play, setPlaying] = useState(false)

    useEffect(() => {
       play ? audio.play() : audio.pause()
      }
    )

    const toggle = () => setPlaying(!play)

    useEffect(() => {
        audio.addEventListener('ended', () => {
            setPlaying(false)
            if(props.queue){
                props.addToQueue(props.index)
            }
        })

        return () => {
            audio.removeEventListener('pause', () => setPlaying(false))
        }
    })

    return [play, toggle]

}

const Podcast = (props) => {
    console.log(props.currentPodcast)
    const [play, toggle] = useAudio(props)

    // returns name of current playlist playing
    const currentPlaylist = useSelector(state => state.playlists.currentPlaylist)

    const dispatch = useDispatch()
    const togglePlaylist = (playlist) => dispatch(changePlaylist(props.playlist))

    const handleToggle = () => {
        toggle()
        props.changePodcast(props.podcast)
        // if we've changed playlists, update playlist in store in order to maintain effect created
        if(currentPlaylist !== props.playlist){
            togglePlaylist(props.playlist)
        }
    }

    useEffect(() => {
        // if it's a different playlist (even if it's the same podcast), turn off
        if(currentPlaylist !== props.playlist && play){
            toggle()
        // if podcast is playing but isn't supposed to, turn off
        } else if(props.currentPodcast !== props.podcast && play){
            toggle()
        } 
    })
        
    return (
            <Draggable draggableId={`${props.index}`} index={props.index}>
                {(provided) => (
                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <div className="podcast-cell">
                                <div className="podcast-image">
                                    <img src={props.podcast.image ? props.podcast.image : "https://bit.ly/3e378JH"} alt="Podcast"/>
                                </div>
                                <div className="podcast-content">
                                    <p id="podcast-title"><strong>{props.podcast.title}</strong></p>
                                    <p id="podcast-description">{props.podcast.description}</p>
                                </div>
                                <div className="podcast-button">
                                    <button onClick={handleToggle}> {play && props.currentPodcast === props.podcast ? "Pause" : "Play"}</button>
                                </div>     
                        </div>
                    </li>
                )}
            </Draggable>
            
        )
}

export default Podcast