import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getEvents } from "../actions/EventAction";
import { Card } from "react-bootstrap";
import Event from "./Event";

class DashBoard extends Component {
  state = {};

  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const { events } = this.props.event;
    //console.log(events);
    const eventArray = events.map(e => <Event key={e.id} event={e} />);
    return (
      <div>
        <br />
        <Card className="event-display">
          <h2>Online Events</h2>
        </Card>
        {eventArray}
      </div>
    );
  }
}

DashBoard.propTypes = {
  event: PropTypes.object.isRequired,
  getEvents: PropTypes.func.isRequired
};

const mapStateToProp = state => ({
  event: state.event
});
export default connect(mapStateToProp, { getEvents })(DashBoard);
