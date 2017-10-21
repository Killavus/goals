import React from 'react';
import PropTypes from 'prop-types';
import TrackForm from './TrackForm';
import {connect} from 'react-redux';
import {loadTracks, createTrack} from "../../actions/trackActions";
import toastr from 'toastr';
import {map} from 'lodash';

class ManageTrackPage extends React.Component {
  constructor(context, props){
    super(context, props);

    this.state = {
      track: Object.assign({}, this.props.track),
      unit: Object.assign({}, this.props.unit),
      errors: getEmptyErrorState()
    };


    this.updateTrackUnit = this.updateTrackUnit.bind(this);
    this.updateTrackState = this.updateTrackState.bind(this);
    this.trackFormIsValid = this.trackFormIsValid.bind(this);
    this.saveTrack = this.saveTrack.bind(this);
  }

  updateTrackState(event) {
    const field = event.target.name;
    var track = Object.assign({}, this.state.track);
    track[field] = event.target.value;
    return this.setState({track: track});
  }


  saveTrack(event){
    event.preventDefault();
    if(!this.trackFormIsValid()){
      return;
    }

    this.props.createTrack(Object.assign({}, this.state.track, {'unit': this.state.unit}))
        .then(() => {
          this.context.router.push('/');
          toastr.success('Track Saved');
        })
        .catch(error => {
          toastr.error(error);
          this.setState({saving: false});
        });

  }

  trackFormIsValid() {
    let formIsValid = true;
    let errors = getEmptyErrorState()
    if(this.state.track.name.length <3){
      errors.trackName = {
        validationText: 'Track name must be at least 3 characters.',
        validationState: 'error'
      }
      formIsValid = false;
    }
    if(this.state.unit.name.length <3){
      errors.unitName = {
        validationText: 'Unit name must be at least 3 characters.',
        validationState: 'error'
      }
      formIsValid = false;
    }if(this.state.unit.shortName.length <1){
      errors.unitShortName = {
        validationText: 'Short name must be at least 1 character.',
        validationState: 'error'
      }
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  componentDidMount(){
    this.props.loadTracks();
  }

  updateTrackUnit(event){
    var unit = this.state.unit;
    if(event.target.name === 'unit-picker'){
      unit = this.props.units[parseInt(event.target.value,10)];
    } else if(event.target.type === 'checkbox') {
      unit[event.target.name] = event.target.checked;
    } else {
      unit[event.target.name] = event.target.value;
    }
    return this.setState({unit: unit});
  }

  render() {
    return(

        <div>
          <TrackForm
            track = {this.state.track}
            units = {this.props.units}
            onChangeTrack = {this.updateTrackState}
            onChangeUnit = {this.updateTrackUnit}
            unit = {this.state.unit}
            errors ={this.state.errors}
            onSave = {this.saveTrack}
          />
        </div>
    )
  }
}



const getUnitsFromListOfTracks = (tracks) =>{
    var rawUnits = {},
        units = {};

    tracks.map((track, index) =>{
          if(!rawUnits[track.unit.name])
            rawUnits[track.unit.name] = track.unit;
            rawUnits[track.unit.name].id = index;
          return null;
          });
    map(rawUnits, (value) => {units[value.id] = value});
    return units;
  };

ManageTrackPage.contextTypes = {
  router: PropTypes.object
}


const getEmptyErrorState = () => {
  return({
    unitName: {
      validationState: null,
      validationText: null
    },
    unitShortName: {
      validationState: null,
      validationText: null
    },
    trackName: {
      validationState: null,
      validationText: null
    }
  })
}



function mapStateToProps(state) {
  var unit = {id: -1, shortName:'', name:'', positiveOnly: false, integerOnly: false},
      track = {name:'', color:'#000000'};
  return {
    track: track,
    units: Object.assign({},getUnitsFromListOfTracks(state.tracks),{'-1' : unit}),
    unit: unit
  }
}


const mapDispatchToProps = { loadTracks, createTrack };

export default connect(mapStateToProps, mapDispatchToProps)(ManageTrackPage);