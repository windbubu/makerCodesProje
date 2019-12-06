import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import {Link} from "react-router-dom"
class SignUp extends React.Component {
  state = {};
  render() {
    return (
      <div className="ui container text-center">
        
      <Form className="Register">
        <h1>VforVeggie.com</h1>
        <h2 className="text-center">Welcome</h2>
        <FormGroup>
          <Input type="email" placeholder="Email"></Input>
        </FormGroup>
        <FormGroup>
          <Input type="password" placeholder="Password"></Input>
        </FormGroup>
        <FormGroup>
          <Input type="text" placeholder="First Name"></Input>
        </FormGroup>
        <FormGroup>
          <Input type="text" placeholder="Last Name"></Input>
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Sign Up</Button>
      </Form>
      </div>
    );
  }
}

export default SignUp;
