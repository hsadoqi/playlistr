import React, { Component } from 'react'
import Podcast from './Podcast'

class SavedPodcastContainer extends Component {
    render(){
        return (
            <ul>{this.props.podcasts.map(podcast => <Podcast podcast={podcast}/>)}</ul>
        )
    }
}

export default SavedPodcastContainer