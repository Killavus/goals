import * as types from './actionTypes';



export function loadTracksSuccess(tracks){
  return {
    type: types.LOAD_TRACKS_SUCCESS, tracks
  };
}


export function createTrackSuccess(tracks){
  return {
    type: types.CREATE_TRACK_SUCCESS, tracks
  };
}


export function loadTracks() {
  console.log("z akcji")
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

export function createTrack(track){
    console.log('poczatek createTrack', track);
    return function (dispatch, getState) {
      return fetch("http://localhost:3000/tracking/tracks", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({'track': track})
      })
          .then( (response) => {
           console.log('json repsone',response.json());
            dispatch(createTrackSuccess());
          }).catch(error => {
        throw(error);
      });
    }
}


// return function(dispatch, getState) {
//   dispatch(beginAjaxCall());
//   console.log("dupszot from action", course);
//   return courseApi.saveCourse(course).then(savedCourse => {
//     console.log("z then");
//     course.id ? dispatch(updateCourseSuccess(savedCourse)) :
//         dispatch(createCourseSuccess(savedCourse));
//   }).catch(error => {
//     console.log("wgl cos?");
//     dispatch(ajaxCallError(error));
//     throw(error);
//   });
// };


