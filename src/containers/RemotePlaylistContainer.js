import React, { Component } from 'react'
import Podcast from '../components/Podcast'

class RemotePlaylistContainer extends Component {
    render(){
        return (
            <div className="remote-playlist-container">
                <h4>Remote Podcasts</h4>
                <ul>{this.props.podcasts.map(podcast => <Podcast key={podcast.name} podcast={podcast} handlePodcast={this.props.handlePodcast}/>)}</ul>
            </div>
        )
    }
}

export default RemotePlaylistContainer