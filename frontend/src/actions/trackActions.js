import * as types from './actionTypes';



export function loadTracksSuccess(tracks){
  return {
    type: types.LOAD_TRACKS_SUCCESS, tracks
  };
}

export function loadUnitsSuccess(units){
  return {
    type: types.LOAD_UNITS_SUCCESS, units
  };
}





export function loadTracks() {
  return function (dispatch) {
    return fetch('http://localhost:3000/tracking', {method: 'GET', mode: 'cors'}).then(function (response) {
      return response.json()
    })
        .then(tracks => {
        dispatch(loadTracksSuccess(tracks));
      }).catch(error => {
        throw(error);
      });
  };
}

export function loadUnits() {
  return function (dispatch) {
    return fetch('http://localhost:3000/tracking', {method: 'GET', mode: 'cors'}).then(function (response) {
      return response.json()
    })
        .then(tracks => {
          dispatch(loadUnitsSuccess(getUnitsFromListOfTracks(tracks)))
        }).catch(error => {
          throw(error);
        });
  };
}


const getUnitsFromListOfTracks = (tracks) =>{
  var units = [];
  tracks.map((track) =>{
    if(!units[track.unit.name]){
      units[track.unit.name] = track.unit;
    }
  });
  return units;
};
