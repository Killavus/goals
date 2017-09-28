import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as trackActions from '../../actions/trackActions';
import TrackListRow from './TrackListRow';


class Tracks extends Component {

  render(){
    console.log(this.props.tracks);
    return(
        <div>
          <div>
            {this.props.tracks.map(track =>
              <TrackListRow key={track.id} track={track}/>)}
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(trackActions, dispatch)
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(Tracks);