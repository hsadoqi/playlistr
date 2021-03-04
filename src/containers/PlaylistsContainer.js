import './PlaylistsContainer.css'
import RemotePlaylistContainer from './RemotePlaylistContainer'
import SavedPodcastContainer from './SavedPodcastContainer'
import { useDispatch } from 'react-redux'
import { fetchRemote } from '../store/actions/playlistActions'

const PlaylistsContainer = () => {
    useDispatch()(dispatch => dispatch(fetchRemote()))

    return (
        <div className="playlists-container">
            <RemotePlaylistContainer/>
            <SavedPodcastContainer/>
        </div>
    )
}


export default PlaylistsContainer