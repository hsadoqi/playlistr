import React, { Component } from 'react'
import './Podcast.css'

class Podcast extends Component {

    constructor(){
        super()
        this.state = {
            play: false
        }
    }

    componentDidMount(){
        this.audio = new Audio(this.props.podcast.audio)
    }

    handlePlayPause = (e) => {
        e.stopPropagation()
        this.state.play ? this.audio.pause() : this.audio.play()
        this.setState((prevState) => {
            return {
                play: !prevState.play
            }
        })
    }

    render(){
        
        return (
            <li>
                <div onClick={() => this.props.handlePodcast(this.props.podcast)} className="podcast-cell">
                        <div className="podcast-image">
                            <img src={this.props.podcast.image ? this.props.podcast.image : "https://bit.ly/3e378JH"} alt="Podcast"/>
                        </div>
                        <div className="podcast-content">
                            <p id="podcast-title"><strong>{this.props.podcast.title}</strong></p>
                            <p id="podcast-description">{this.props.podcast.description}</p>
                        </div>
                        <div className="podcast-button">
                        <button onClick={this.handlePlayPause}> {this.state.play ? "Pause" : "Play"}</button>
                        </div>
                        
                </div>
            </li>
        )
    }
}

export default Podcast