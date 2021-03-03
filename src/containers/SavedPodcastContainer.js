import React, { Component } from 'react'
import Podcast from '../components/Podcast'
import { connect } from 'react-redux'

class SavedPodcastContainer extends Component {
    render(){
        return (
            <div className="saved-playlist-container">
                <h4>Saved Podcasts</h4>
                <ul>{this.props.savedPodcasts.map(podcast => <Podcast key={podcast.name} podcast={podcast} />)}</ul>
            </div>
            
        )
    }
}

const mapStateToProps = ({ playlists }) => {
    return {
        savedPodcasts: playlists.savedPodcasts
    }
}

export default connect(mapStateToProps)(SavedPodcastContainer)