import React, { Component } from "react"
import RemotePlaylistContainer from './RemotePlaylistContainer'
import SavedPodcastContainer from './SavedPodcastContainer'

class PlaylistsContainer extends Component {

    constructor(){
        super()
        this.state = {
            remotePodcasts: [],
            savedPodcasts: []
        }
    }

    componentDidMount(){
        fetch(`https://gist.githubusercontent.com/CervantesVive/3f85bf26672cf27fe1cd932ffcb7ecac/raw/4de50b351a62158083a97f3b950bd786d3ffd928/awesome-podcasts.json`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                remotePodcasts: data.podcasts
            })
        })
    }

    savePodcast = (podcast) => {
        this.setState({
            savedPodcasts: [...this.state.savedPodcasts, podcast]
        })
    }

    render(){
        return (
            <div>PlaylistContainer
            <RemotePlaylistContainer podcasts={this.state.remotePodcasts} savePodcast={this.savePodcast}/>
            <SavedPodcastContainer podcasts={this.state.savedPodcasts} />
            </div>
        )
    }
}

export default PlaylistsContainer