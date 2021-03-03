import React, { Component } from 'react'
import Podcast from '../components/Podcast'

class SavedPodcastContainer extends Component {
    render(){
        return (
            <div className="saved-playlist-container">
                <h4>Saved Podcasts</h4>
                <ul>{this.props.podcasts.map(podcast => <Podcast podcast={podcast} handlePodcast={this.props.handlePodcast}/>)}</ul>
            </div>
            
        )
    }
}

export default SavedPodcastContainer