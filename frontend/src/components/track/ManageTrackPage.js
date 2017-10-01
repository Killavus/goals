import React from 'react';
import TrackForm from './TrackForm';
import {connect} from 'react-redux';

class ManageTrackPage extends React.Component {
  constructor(context, props){
    super(context, props);

    this.state = {
      track: Object.assign({}, this.props.track),
      errors: {},
    };

    this.updateTrackState = this.updateTrackState.bind(this);
  }

  updateTrackState(event) {
    const field = event.target.name;
    console.log(event.target);
    var track = Object.assign({}, this.state.track);
    track[field] = event.target.value;
    return this.setState({track: track});
  }

  render() {
    console.log('render w Manage',this.state);
    return(

        <div>
          <TrackForm
            track = {this.state.track}
            errors = {this.state.errors}
            onChange = {this.updateTrackState}
          />
        </div>
    )
  }
}

function mapStateToProps(state) {
  var track = {name:'', color:'#000000', unit: {shortName:'', name:'', positiveOnly: true, integerOnly: true} };
  return {
    track: track
  }
}

export default connect(mapStateToProps, null)(ManageTrackPage);