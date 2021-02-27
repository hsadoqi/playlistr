import React, { Component } from 'react'

class Podcast extends Component {
    render(){
        return (
            <li onClick={() => this.props.savePodcast(this.props.podcast)}>{this.props.podcast.name}</li>
        )
    }
}

export default Podcast