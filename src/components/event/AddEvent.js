import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { createEvent } from "../../actions/EventAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

class AddEvent extends Component {
  state = {
    name: "",
    organiserName: " ",
    description: "",
    eventDate: "",
    duration: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newEvent = {
      name: this.state.name,
      organiserName: this.state.organiserName,
      description: this.state.description,
      eventDate: this.state.eventDate,
      duration: this.state.duration
    };
    this.props.createEvent(newEvent, this.props.history);
  };
  render() {
    const { errors } = this.state;
    console.log(errors);
    return (
      <div className="event-display-box">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Event Title</Form.Label>
            <Form.Control
              type="text"
              className={classnames("", {
                "is-invalid": errors.name
              })}
              placeholder="Event Title"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Organizer Name</Form.Label>
            <Form.Control
              type="text"
              className={classnames("", {
                "is-invalid": errors.organiserName
              })}
              placeholder="Organizer Name"
              name="organiserName"
              value={this.state.organiserName}
              onChange={this.onChange}
            />
            {errors.organiserName && (
              <div className="invalid-feedback">{errors.organiserName}</div>
            )}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Event Date</Form.Label>
            <Form.Control
              type="text"
              className={classnames("", {
                "is-invalid": errors.eventDate
              })}
              placeholder="Event date"
              name="eventDate"
              value={this.state.eventDate}
              onChange={this.onChange}
            />
            {errors.eventDate && (
              <div className="invalid-feedback">{errors.eventDate}</div>
            )}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Event duration</Form.Label>
            <Form.Control
              type="number"
              placeholder="duration"
              name="duration"
              value={this.state.duration}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className={classnames("", {
                "is-invalid": errors.description
              })}
              name="description"
              value={this.state.description}
              onChange={this.onChange}
            />
            {errors.description && (
              <div className="invalid-feedback">{errors.description}</div>
            )}
          </Form.Group>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
AddEvent.propTypes = {
  createEvent: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});
export default connect(mapStateToProps, { createEvent })(AddEvent);
