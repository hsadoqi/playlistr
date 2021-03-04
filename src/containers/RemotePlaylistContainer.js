import React, { Component } from 'react'
import Podcast from '../components/Podcast'
import { connect } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { savePodcast } from '../store/actions/playlistActions'

class RemotePlaylistContainer extends Component {

    handleDragFunctionality = (result) => {
        if(!result.destination){
            this.props.savePodcast(result)
        } else {
            return
        }
    }
    render(){
        return (
            <div className="remote-playlist-container">
                <h4>Remote Podcasts</h4>
                <DragDropContext onDragEnd={this.handleDragFunctionality}>
                    <Droppable droppableId="remoteList">
                        {(provided) => (
                            <ul className="remoteList" {...provided.droppableProps} ref={provided.innerRef}>{this.props.remotePodcasts.map((podcast, index) => <Podcast key={podcast.name} podcast={podcast} index={index}/>)}{provided.placeholder} </ul>
                        )}
                        
                    </Droppable>
                </DragDropContext>
                
            </div>
        )
    }
}


const mapStateToProps = ({ playlists }) => {
    return {
        remotePodcasts: playlists.remotePodcasts
    }
}

export default connect(mapStateToProps, { savePodcast })(RemotePlaylistContainer)