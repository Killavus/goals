import React from 'react';
import {PageHeader,Form, FormGroup, Col, ControlLabel, FormControl} from 'react-bootstrap';

class ManageTrackPage extends React.Component {




  render() {
    return(
        <div>
          <PageHeader> Track </PageHeader>
          <form>
            <Form horizontal>

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Name
                </Col>
                <Col sm={6}>
                  <FormControl type="name" placeholder="Name" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalColor">
                <Col componentClass={ControlLabel} sm={2}>
                  Color
                </Col>
                <Col sm={3}>
                  <FormControl type="color" placeholder="color" />
                </Col>
                <Col sm={3}>
                  <FormControl type="text" placeholder="#F0000" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalControlsSelect">
                <Col componentClass={ControlLabel} sm={2}>
                  Unit
                </Col>
                <Col sm={5}>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="select">...</option>
                    <option value="other">...</option>
                    <option value="other">...</option>
                    <option value="other">...</option>
                  </FormControl>
                </Col>
              </FormGroup>

              <div id="unitForm" style={{display: 'block'}}>
                <FormGroup controlId="formHorizontalUnitName">
                  <Col componentClass={ControlLabel} sm={3}>
                    Unit name
                  </Col>
                  <Col sm={7}>
                    <FormControl type="unitName" placeholder="Unit Name" />
                  </Col>
                </FormGroup>
              </div>

            </Form>
          </form>
        </div>
    )
  }
}



export default ManageTrackPage;