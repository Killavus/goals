import React from 'react'
import {Panel, MenuItem, DropdownButton} from 'react-bootstrap';


export const TrackSummaryHeader = ({trackHeader, style}) => {
    return(
      <Panel style={Object.assign({},{'width':'15%', 'text-align': 'center' },style)}>
          <span style={{'font-weight': 'bold', 'font-size': '30px'}}> {trackHeader.calories}</span>
          <p style={{'text-align': 'center', 'font-size': '10px'}}>Calories</p>
          <span style={{'font-size': '15px'}}> {trackHeader.lastMeas}</span>
          <p style={{'text-align': 'center', 'font-size': '10px'}}>Last Measurement</p>
          <EditAndDeleteButton />
        </Panel>
    )
};

export const TrackColorPanel = ({trackId, style}) => {
    var colors = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

    return(
        <Panel style={Object.assign({}, style, {backgroundColor: colors, width: '1px'})}>
          <br />
        </Panel>
    )
};

export const TrackSummaryChart = ({trackChart, style}) => {
    return(
        <Panel style={Object.assign({},{width:'69%'},style)}>
          Tu Kurwa jakis chart powinien byc
        </Panel>
    )
};

export const TrackGoalsSummary = ({trackGoalsSummary, style}) => {
    return(
        <Panel style={Object.assign({},{width:'15%'},style)}>
          GOALS
        </Panel>
    )
};

export const EditAndDeleteButton = () => {
  return(
      <DropdownButton bsStyle="'Primary" title="..." id="dropdown-size-extra-small">
        <MenuItem eventKey="1">Edit</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="2">Delete</MenuItem>

      </DropdownButton>
  )
}

