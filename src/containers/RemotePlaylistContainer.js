import React, { Component } from 'react'
import Podcast from '../components/Podcast'
import { connect } from 'react-redux'

class RemotePlaylistContainer extends Component {
    render(){
        return (
            <div className="remote-playlist-container">
                <h4>Remote Podcasts</h4>
                <ul>{this.props.remotePodcasts.map(podcast => <Podcast key={podcast.name} podcast={podcast}/>)}</ul>
            </div>
        )
    }
}


const mapStateToProps = ({ playlists }) => {
    return {
        remotePodcasts: playlists.remotePodcasts
    }
}

export default connect(mapStateToProps)(RemotePlaylistContainer)