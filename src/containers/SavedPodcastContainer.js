import Podcast from '../components/Podcast'
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { handleOnDragEnd, removePodcastFromSaved } from '../store/actions/playlistActions'

const SavedPodcastContainer = () => {
    const dispatch = useDispatch()
    const savedPlaylist = useSelector(state => state.playlists.savedPodcasts)


    const handleDragFunctionality = (result) => {
        if(!result.destination){
            dispatch(removePodcastFromSaved(result))
        } else {
            dispatch(handleOnDragEnd(result))
        }
    }

    return (
        <div className="saved-playlist-container">
            <h4>Saved Podcasts</h4>
            <DragDropContext onDragEnd={handleDragFunctionality}>
                <Droppable droppableId="savedList">
                    {(provided) => (
                        <ul className="savedList" {...provided.droppableProps} ref={provided.innerRef}>{savedPlaylist.map((podcast, index) => <Podcast key={index} podcast={podcast} index={index}/>)} {provided.placeholder}</ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}



export default SavedPodcastContainer