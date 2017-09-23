import React from 'react';


const TrackListRow = ( {track} ) => {
  return (
      <tr>
        <td>{track.id}</td>
        <td>{track.calories}</td>
        <td>{track.lastMeas}</td>
      </tr>
  );
};



export default  TrackListRow;