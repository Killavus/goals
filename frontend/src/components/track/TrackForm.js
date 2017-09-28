import React from 'react'
import {Button, Modal, Glyphicon, Form, FormGroup, Col, FormControl, ControlLabel, Panel} from 'react-bootstrap';

class TrackForm extends React.Component {

  constructor(context, props){
    super(context, props);
    this.state = {showModal: false,
                  }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
        <div>
          <div style={{float:'right', marginBottom: '10px'  }}>
            <Button bsStyle="primary" bsSize="large" onClick={() => {this.open()}}>New Track <Glyphicon glyph="plus" /></Button>
          </div>

          <Modal show={this.state.showModal} onHide={() => {this.close()}}>
            <Modal.Header closeButton>
              <Modal.Title>New Track</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <Form horizontal>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      Name
                    </Col>
                    <Col sm={10}>
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
                  <FormGroup controlId="formControlsSelect" style={{width: '20%', marginLeft: '33px'}}>
                    <ControlLabel>Unit</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                      <option value="select">...</option>
                      <option value="other">...</option>
                      <option value="other">...</option>
                      <option value="other">...</option>
                    </FormControl>
                  </FormGroup>
                </Form>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="primary" onClick={() => {this.close()}}>Save!</Button>
              <Button onClick={() => {this.close()}}>Cancel</Button>
            </Modal.Footer>
          </Modal>
        </div>
    );
  }
}

export default TrackForm;