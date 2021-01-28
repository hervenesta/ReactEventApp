import React, { Component } from "react";
import { connect } from "react-redux";
import { getEventByUser } from "../../actions/EventAction";
import PropTypes from "prop-types";
import Event from "../Event";
import EventByUser from "../EventByUser";

class MyDashboard extends Component {
  componentDidMount() {
    const userId = 1;
    this.props.getEventByUser(userId);
  }
  render() {
    const { eventsByUser } = this.props.event;
    console.log(eventsByUser);
    const arr = eventsByUser.map(e => <EventByUser key={e.id} event={e} />);
    return <div>{arr}</div>;
  }
}
MyDashboard.propType = {
  getEventByUser: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
};
const mapStateToProp = state => ({
  event: state.event
});
export default connect(mapStateToProp, { getEventByUser })(MyDashboard);
