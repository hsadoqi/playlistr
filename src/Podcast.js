import React, { Component } from 'react'

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
            <li onClick={() => console.log("clicked")}>
                    <img src={this.props.podcast.image} alt=""/>
                    <h6>{this.props.podcast.title}</h6>
                    <p>{this.props.podcast.description}</p>
                    <button onClick={this.handlePlayPause}> {this.state.play ? "Pause" : "Play"}</button>
            </li>
        )
    }
}

export default Podcast