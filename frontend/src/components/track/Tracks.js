import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadTracks} from '../../actions/trackActions';
import TrackListRow from './TrackListRow';
import {Button, Glyphicon} from  'react-bootstrap';
import {browserHistory} from 'react-router';

class Tracks extends Component {
  constructor(context, props){
    super(context, props);
    this.redirectToAddTrackPage = this.redirectToAddTrackPage.bind(this);
  }

  redirectToAddTrackPage(){
    browserHistory.push('/track');
  }

  componentDidMount(){
    this.props.loadTracks();
  }

  render(){
    return(
        <div>
          <div style={{float:'right', marginBottom: '16px'  }}>
            <Button bsStyle="primary"
                    onClick={this.redirectToAddTrackPage}>
                      New Track <Glyphicon glyph="plus" />
            </Button>
          </div>
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

const mapDispatchToProps = { loadTracks }




export default connect(mapStateToProps, mapDispatchToProps)(Tracks);