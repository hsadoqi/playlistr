import Podcast from '../components/Podcast'
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { savePodcast } from '../store/actions/playlistActions'
import { useState } from 'react'


const RemotePlaylistContainer = () => {
    const dispatch = useDispatch()
    const remotePlaylist = useSelector(state => state.playlists.remotePodcasts)
    const [currentPodcastIndex, setPodcastIndex] = useState(null)
    const changePodcast = (index) => setPodcastIndex(index)

    const handleDragFunctionality = (result) => {
        if(!result.destination){
            dispatch(savePodcast(result))
        } else {
            return
        }
    }

    return (
        <div className="remote-playlist-container">
            <h4>Remote Podcasts</h4>
            <DragDropContext onDragEnd={handleDragFunctionality}>
                <Droppable droppableId="remoteList">
                    {(provided) => (
                        <ul className="remoteList" {...provided.droppableProps} ref={provided.innerRef}>
                            {remotePlaylist.map((podcast, index) => {
                                return <Podcast 
                                    key={index} 
                                    podcast={podcast} 
                                    index={index} 
                                    changePodcast={changePodcast} 
                                    currentPodcastIndex={currentPodcastIndex} playlist="remote"
                                    />
                                })
                            }
                        {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default RemotePlaylistContainer