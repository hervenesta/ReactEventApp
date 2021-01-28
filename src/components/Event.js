import React, { Component } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { deleteEvent, createSubscription } from "../actions/EventAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

class Event extends Component {
  state = {
    userId: 1,
    eventId: this.props.event.eventId
  };

  onDeleteClick = eventId => {
    this.props.deleteEvent(eventId);
  };

  onClick = e => {
    e.preventDefault();
    const newSubs = {
      userId: this.state.userId,
      eventId: this.state.eventId
    };

    this.props.createSubscription(newSubs, this.props.history);
  };
  render() {
    const { event } = this.props;
    return (
      <div className="event-display-box">
        <br />
        <Form>
          <Card>
            <Card.Header as="h5">{event.name}</Card.Header>
            <Card.Body>
              <Card.Title>
                Hosted By {event.organiserName} on {event.eventDate}
              </Card.Title>
              <Card.Text>{event.description}</Card.Text>
              <Button onClick={this.onClick} variant="primary">
                Register
              </Button>
              <Button
                onClick={this.onDeleteClick.bind(this, event.eventId)}
                variant="primary"
                style={{ marginLeft: 5 }}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        </Form>
      </div>
    );
  }
}
Event.propTypes = {
  createSubscription: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired
};
export default connect(null, { createSubscription, deleteEvent })(Event);
