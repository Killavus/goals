import React, {Component} from 'react';
import {connect} from 'react-redux';
import TrackList from "./TrackList";
import {bindActionCreators} from 'redux';
import * as trackActions from '../../actions/trackActions';

class Tracks extends Component {
  constructor(props, context){
    super(props,context);
  }
  render(){
    console.log(this);
    return(
        <div className="jumbotron">
          <h1> CHUJ </h1>
          <TrackList tracks={this.props.tracks}/>
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