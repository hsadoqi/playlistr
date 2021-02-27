import React, { Component } from 'react'
import Podcast from './Podcast'

class RemotePlaylistContainer extends Component {
    render(){
        return (
            <ul>{this.props.podcasts.map(podcast => <Podcast podcast={podcast} savePodcast={this.props.savePodcast}/>)}</ul>
        )
    }
}

export default RemotePlaylistContainer