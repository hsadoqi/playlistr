import Podcast from '../components/Podcast'
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { handleOnDragEnd, removePodcast } from '../store/actions/playlistActions'
import { useState } from 'react'

const SavedPodcastContainer = () => {
    const dispatch = useDispatch()

    const savedPlaylist = useSelector(state => state.playlists.savedPodcasts)
    
    const [currentPodcast, setCurrentPodcast] = useState(null)
    const changePodcast = (podcast) => podcast ? setCurrentPodcast(podcast) : setCurrentPodcast(null)

    const [queue, setQueue] = useState(null)

    const addToQueue = (index) => {
        const newQueue = [...savedPlaylist]
        const newIndex = index++
        setQueue(newQueue.splice(newIndex))
    }

    return (
        <div className="saved-playlist-container">
            <h4>Saved Podcasts</h4>
            <DragDropContext onDragEnd={(result) => !result.destination ? dispatch(removePodcast(result)) :dispatch(handleOnDragEnd(result))}>
                <Droppable droppableId="savedList">
                    {(provided) => (
                        <ul className="savedList" {...provided.droppableProps} ref={provided.innerRef}>
                            {savedPlaylist.map((podcast, index) => {
                                return <Podcast 
                                            key={index} 
                                            podcast={podcast} 
                                            index={index} 
                                            currentPodcast={currentPodcast} 
                                            changePodcast={changePodcast} 
                                            playlist="saved"
                                            queue={queue}
                                            addToQueue={addToQueue}
                                        />
                            })
                            } {provided.placeholder}</ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}



export default SavedPodcastContainer