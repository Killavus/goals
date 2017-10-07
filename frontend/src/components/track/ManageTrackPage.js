import React from 'react';
import TrackForm from './TrackForm';
import {connect} from 'react-redux';
import {loadTracks} from "../../actions/trackActions";
import {bindActionCreators} from 'redux';


class ManageTrackPage extends React.Component {
  constructor(context, props){
    super(context, props);

    this.state = {
      track: Object.assign({}, this.props.track),
      unit: Object.assign({}, this.props.unit),
      errors: {},
    };

    this.updateTrackUnit = this.updateTrackUnit.bind(this);
    this.updateTrackState = this.updateTrackState.bind(this);
  }

  updateTrackState(event) {
    const field = event.target.name;
    console.log('update',event.target.name);
    var track = Object.assign({}, this.state.track);
    track[field] = event.target.value;
    return this.setState({track: track});
  }

  updateTrackUnit(event){
    var unit = this.props.unit;
    if(event.target.name === 'unit-picker'){
      unit.id = event.target.value
    } else {
      unit[event.target.name] = event.target.value;
    }
    var xx = document.getElementById('create-new-unit').style;
    console.log('pierwsza', xx);
    xx.display ='block';
    console.log('pierwsza _2', xx);
    document.getElementById('create-new-unit').style.display =
                ((event.target.value === -1) ? 'block' : 'none');
    console.log('po update', xx);
    var yy   = document.getElementById('create-new-unit').style;
    console.log('jeszcze raz przypisne', yy);
    return this.setState({unit: unit});
  }

  render() {
    return(

        <div>
          <TrackForm
            track = {this.state.track}
            units = {this.props.units}
            errors = {this.state.errors}
            onChangeTrack = {this.updateTrackState}
            onChangeUnit = {this.updateTrackUnit}
          />
        </div>
    )
  }
}



const getUnitsFromListOfTracks = (tracks) =>{
    var units = {};
    tracks.map((track, index) =>{
        if(!units[index]){
            units[index] = track.unit;
            units[index].id = index;
          }
      });
    return units;
  };

function mapStateToProps(state) {
  var unit = {id: -1, shortName:'', name:'', positiveOnly: true, integerOnly: true},
      track = {name:'', color:'#000000'};
  return {
    track: track,
    units: getUnitsFromListOfTracks(state.tracks),
    unit: unit
  }
}
function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(loadTracks, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTrackPage);