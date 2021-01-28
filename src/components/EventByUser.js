import React, { Component } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { unsubscribed } from "../actions/EventAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class EventByUser extends Component {
  onDeleteClick = (userid, eventId) => {
    this.props.unsubscribed(userid, eventId);
  };

  render() {
    const { event } = this.props;
    const userId = 1;
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
              <Button
                onClick={this.onDeleteClick.bind(this, userId, event.eventId)}
                variant="primary"
              >
                UnSubscribe
              </Button>
            </Card.Body>
          </Card>
        </Form>
      </div>
    );
  }
}
Event.propTypes = {
  unsubscribed: PropTypes.func.isRequired
};
export default connect(null, { unsubscribed })(EventByUser);
