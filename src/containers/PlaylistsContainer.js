import './PlaylistsContainer.css'
import React, { Component } from "react"
import RemotePlaylistContainer from './RemotePlaylistContainer'
import SavedPodcastContainer from './SavedPodcastContainer'
import { connect } from 'react-redux'
import { fetchRemote } from '../store/actions/playlistActions'

class PlaylistsContainer extends Component {

    componentDidMount(){
        this.props.fetchRemote()
    }

    removePodcast = (podcast) => {

    }

    render(){
        return (
            <div className="playlists-container">
                <RemotePlaylistContainer/>
                <SavedPodcastContainer handlePodcast={this.removePodcast}/>
            </div>
        )
    }
}


export default connect(null, { fetchRemote })(PlaylistsContainer)