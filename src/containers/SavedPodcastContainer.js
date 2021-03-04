import Podcast from '../components/Podcast'
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { handleOnDragEnd, removePodcast } from '../store/actions/playlistActions'
import { useState } from 'react'

const SavedPodcastContainer = () => {
    const dispatch = useDispatch()
    const savedPlaylist = useSelector(state => state.playlists.savedPodcasts)
    const [currentPodcastIndex, setPodcastIndex] = useState(null)
    const changePodcast = (index) => index < savedPlaylist.length ? setPodcastIndex(index) : setPodcastIndex(null)

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
                                            currentPodcastIndex={currentPodcastIndex} 
                                            changePodcast={changePodcast} 
                                            playlist="saved"
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