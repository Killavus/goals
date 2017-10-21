import React from 'react';
import {Button,PageHeader,Form, FormGroup, Col, ControlLabel, FormControl, Checkbox} from 'react-bootstrap';
import {map} from 'lodash';

const TrackForm = ({unit, units,track, errors, onSave, onChangeTrack, onChangeUnit}) => {

  return(

    <div>
      <PageHeader> Track </PageHeader>
        <Form horizontal>

          <FormGroup validationState={errors.trackName.validationState}>
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={6}>
              <FormControl type="name" placeholder="Name" name="name" value={track.name} onChange={onChangeTrack} />
              <FormControl.Feedback />
              {errors.trackName.validationText && <p style={{color: 'red'}}>{errors.trackName.validationText}</p>}
            </Col>

          </FormGroup>
          <FormGroup  >
            <Col componentClass={ControlLabel} sm={2}>
              Color
            </Col>
            <Col sm={3}>
              <FormControl type="color"
                           name="color"
                           value={track.color}

                           onChange={onChangeTrack} />
            </Col>
            <Col sm={3}>
              <FormControl type="text"
                           value={track.color}
                           name="color"
                           onChange={onChangeTrack}
                            disabled/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Unit
            </Col>
            <Col sm={5}>
              <FormControl componentClass="select"
                           placeholder="select"
                           name='unit-picker'
                           onChange={onChangeUnit}>
                <option value="-1"> Create Unit </option>
                {map(units, (unit,index) =>
                  unit.id !== -1 && <option key={index}
                          value={unit.id}>
                    {unit.name}
                  </option>

                )}

              </FormControl>
            </Col>
          </FormGroup>
          { unit.id === -1 ?
          <div>
            <FormGroup validationState={errors.unitName.validationState} controlId="formHorizontalUnitName" >
              <Col componentClass={ControlLabel} sm={2}>
                Unit name
              </Col>
              <Col sm={6}>
                <FormControl type="unitName"
                             placeholder="Unit Name"
                             name="name"
                             value={unit.name}
                             onChange={onChangeUnit}/>
                <FormControl.Feedback />
                {errors.unitName.validationText && <p style={{color: 'red'}}>{errors.unitName.validationText}</p>}
              </Col>
            </FormGroup>
            <FormGroup  validationState={errors.unitShortName.validationState} controlId="formHorizontalUnitShortName" >
              <Col componentClass={ControlLabel} sm={2}>
              Short Unit Name
              </Col>
              <Col sm={6}>
                <FormControl type="shortUnitName"
                             placeholder="Short Unit Name"
                             name="shortName"
                             value={unit.shortName}
                             onChange={onChangeUnit}/>
                <FormControl.Feedback />
                {errors.unitShortName.validationText && <p style={{color: 'red'}}>{errors.unitShortName.validationText}</p>}
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={2}>
                {' '}
              </Col>
              <Col sm={3}>
                <Checkbox inline onChange={onChangeUnit} name="positiveOnly" checked={unit.positiveOnly}>
                  Positive Only
                </Checkbox>
              </Col>
              <Col sm={3}>
                <Checkbox inline onChange={onChangeUnit} name="integerOnly" checked={unit.integerOnly}>
                  Integer Only
                </Checkbox>
              </Col>
            </FormGroup>
          </div>
          : null
          }

          <div>
            <Button onClick={onSave}>
              Submit
            </Button>
          </div>
        </Form>
    </div>
  )

};

export default TrackForm;