import React, { Component } from 'react'
import Podcast from '../components/Podcast'
import { connect } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { handleOnDragEnd, removePodcastFromSaved } from '../store/actions/playlistActions'

class SavedPodcastContainer extends Component {

    handleDragFunctionality = (result) => {
        if(!result.destination){
            this.props.removePodcastFromSaved(result)
        } else {
            this.props.handleOnDragEnd(result)
        }
    }

    render(){
        return (
                <div className="saved-playlist-container">
                    <h4>Saved Podcasts</h4>
                    <DragDropContext onDragEnd={this.handleDragFunctionality}>
                        <Droppable droppableId="savedList">
                            {(provided) => (
                                <ul className="savedList" {...provided.droppableProps} ref={provided.innerRef}>{this.props.savedPodcasts.map((podcast, index) => <Podcast key={podcast.name} podcast={podcast} index={index}/>)} {provided.placeholder}</ul>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>

        )
    }
}

const mapStateToProps = ({ playlists }) => {
    return {
        savedPodcasts: playlists.savedPodcasts
    }
}

export default connect(mapStateToProps, { handleOnDragEnd, removePodcastFromSaved })(SavedPodcastContainer)