import React from 'react'
import {Panel, MenuItem, DropdownButton} from 'react-bootstrap';


export const TrackSummaryHeader = ({trackHeader, style}) => {
    return(
      <Panel style={Object.assign({},{'width':'15%', textAlign: 'center' },style)}>
          <span style={{fontWeight: 'bold', fontSize: '30px'}}> {trackHeader.calories}</span>
          <p style={{textAlign: 'center',  fontSize: '10px'}}>Calories</p>
          <span style={{ fontSize: '15px'}}> {trackHeader.lastMeas}</span>
          <p style={{textAlign: 'center',  fontSize: '10px'}}>Last Measurement</p>
        <div style={ {'float': 'right', marginRight:'10px'}}><EditAndDeleteButton /></div>
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
      <DropdownButton bsSize="xsmall" bsStyle='primary' title="" id="dropdown-size-extra-small" >
        <MenuItem eventKey="1">Edit</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="2">Delete</MenuItem>

      </DropdownButton>
  )
}

