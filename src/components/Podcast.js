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

    const toggle = () => {
        setPlaying(!play)
    }

    useEffect(() => {
        audio.addEventListener('ended', () => {
            setPlaying(false)
            if(props.playlist === "saved"){
                props.changePodcast(props.index++)
            } else {
                props.changePodcast(null)
            }       
        })

        return () => {
            audio.removeEventListener('ended', () => setPlaying(false))
        }
    })

    return [play, toggle]

}

const Podcast = (props) => {
    const [play, toggle] = useAudio(props)
    const currentPlaylist = useSelector(state => state.playlists.currentPlaylist)
    const dispatch = useDispatch()
    const togglePlaylist = (playlist) => dispatch(changePlaylist(props.playlist))

    console.log(currentPlaylist)
    const handleToggle = () => {
        toggle()
        props.changePodcast(props.index)
        if(currentPlaylist !== props.playlist){
            togglePlaylist(props.playlist)
        }
    }

    useEffect(() => {
        if(props.currentPodcastIndex !== props.index && play){
            toggle()
        } else if(currentPlaylist !== props.playlist && play){
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
                                    <button onClick={handleToggle}> {play && props.currentPodcastIndex === props.index ? "Pause" : "Play"}</button>
                                </div>     
                        </div>
                    </li>
                )}
            </Draggable>
            
        )
}

export default Podcast