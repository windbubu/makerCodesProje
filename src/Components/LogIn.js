import React from "react";
import { Button, Label, Form, FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";
class LogIn extends React.Component {
  render() {
    return (
      <Form className="Register">
        <h1>VforVeggie.com</h1>
        <h2 className="text-center">Welcome</h2>
        <FormGroup>
          <Input type="email" placeholder="Email"></Input>
        </FormGroup>
        <FormGroup>
          <Input type="password" placeholder="Password"></Input>
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Log in</Button>
        <div className="text-center font-weight-bold mt-3">OR</div>
        <div className="text-center mt-3 mb-3 ">
          <Link to="/SignUp">SignUp</Link>
        </div>
      </Form>
    );
  }
}

export default LogIn;
