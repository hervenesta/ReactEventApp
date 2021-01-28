import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions/EventAction";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import classnames from "classnames";

class Signup extends Component {
  state = {
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPass: "",
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
    const newUser = {
      username: this.state.username,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      confirmPass: this.state.confirmPass
    };
    this.props.createUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="event-display-box">
        <br />
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              className={classnames("", {
                "is-invalid": errors.username
              })}
              placeholder="user name"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              className={classnames("", {
                "is-invalid": errors.email
              })}
              placeholder="email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="phone number"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              className={classnames("", {
                "is-invalid": errors.password
              })}
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              className={classnames("", {
                "is-invalid": errors.confirmPass
              })}
              placeholder="Confirm Password"
              name="confirmPass"
              value={this.state.confirmPass}
              onChange={this.onChange}
            />
            {errors.confirmPass && (
              <div className="invalid-feedback">{errors.confirmPass}</div>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
Signup.propTypes = {
  createUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});
export default connect(mapStateToProps, { createUser })(Signup);
