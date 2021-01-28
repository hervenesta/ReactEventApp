import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function Hearder() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/dashboard">Events</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/createEvent">Create Event</Nav.Link>
          <Nav.Link href="/mydashboard">My DashBoard</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default Hearder;
