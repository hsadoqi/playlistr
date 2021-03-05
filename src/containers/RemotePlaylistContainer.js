import Podcast from '../components/Podcast'
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { savePodcast } from '../store/actions/playlistActions'
import { useState } from 'react'


const RemotePlaylistContainer = () => {
    const dispatch = useDispatch()

    const remotePlaylist = useSelector(state => state.playlists.remotePodcasts)
    
    const [currentPodcast, setCurrentPodcast] = useState(null)
    const changePodcast = (podcast) => setCurrentPodcast(podcast)
    const [playing, setPlaying] = useState(false)

    return (
        <div className="remote-playlist-container">
            <h4>Remote Podcasts</h4>
            <DragDropContext onDragEnd={(result) => !result.destination ? dispatch(savePodcast(result)) : null}>
                <Droppable droppableId="remoteList">
                    {(provided) => (
                        <ul className="remoteList" {...provided.droppableProps} ref={provided.innerRef}>
                            {remotePlaylist.map((podcast, index) => {
                                return <Podcast 
                                    key={podcast.name} 
                                    podcast={podcast} 
                                    index={index} 
                                    changePodcast={changePodcast} 
                                    currentPodcast={currentPodcast} 
                                    playlist="remote"
                                    playing={playing}
                                    setPlaylist={setPlaying}
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