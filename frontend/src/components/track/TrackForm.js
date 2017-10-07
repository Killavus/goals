import React from 'react';
import {Button,PageHeader,Form, FormGroup, Col, ControlLabel, FormControl} from 'react-bootstrap';
import {map} from 'lodash';

const TrackForm = ({units,track, errors, onChangeTrack, onChangeUnit}) => {

  return(

    <div>
      <PageHeader> Track </PageHeader>
      <form>
        <Form horizontal>

          <FormGroup >
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={6}>
              <FormControl type="name" placeholder="Name" name="name" value={track.name} onChange={onChangeTrack} />
            </Col>
          </FormGroup>
          <FormGroup >
            <Col componentClass={ControlLabel} sm={2}>
              Color
            </Col>
            <Col sm={3}>
              <FormControl type="color"  name="color" value={track.color} onChange={onChangeTrack} />
            </Col>
            <Col sm={3}>
              <FormControl type="text" value={track.color} name="color" onChange={onChangeTrack} />
            </Col>
          </FormGroup>
          <FormGroup >
            <Col componentClass={ControlLabel} sm={2}>
              Unit
            </Col>
            <Col sm={5}>
              <FormControl componentClass="select" placeholder="select" name='unit-picker' onChange={onChangeUnit}>
                {map(units, (unit,index) =>
                  <option key={index}
                          value={unit.id}>
                    {unit.name}
                  </option>

                )}
                <option value='-1'> Create Unit </option>
              </FormControl>
            </Col>
          </FormGroup>

          <div id="create-new-unit" style={{display: 'none'}}>
            <FormGroup controlId="formHorizontalUnitName">
              <Col componentClass={ControlLabel} sm={3}>
                Unit name
              </Col>
              <Col sm={7}>
                <FormControl type="unitName" placeholder="Unit Name" />
              </Col>
            </FormGroup>
          </div>
          <div>
            <Button onClick={() => {console.log(track.color)}}>
              Submit
            </Button>
          </div>
        </Form>
      </form>
    </div>
  )

};

export default TrackForm;