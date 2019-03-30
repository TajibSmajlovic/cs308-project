import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message
} from "semantic-ui-react";

import styles from "./Register.module.css";
import Aux from "../../../hoc/Auxiliary/Auxiliary";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmed: ""
  };

  // Taking the input from forms
  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  isFormEmpty = () => {};

  isFormValid = () => {};

  isPasswordValid = () => {};

  saveUser = () => {};

  render() {
    return (
      <Aux>
        <Grid textAlign="center" verticalAlign="middle" className={styles.Grid}>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h1" color="blue" textAlign="center">
              [LOGO]
            </Header>
            <Form size="large" autoComplete="off">
              <Segment>
                <Header as="h2" style={{ color: "royalblue" }}>
                  Welcome to sjedi.ba
                </Header>
                <Form.Input
                  fluid
                  name="username"
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  onChange={this.inputHandler}
                  type="text"
                />

                <Form.Input
                  fluid
                  name="email"
                  icon="mail"
                  iconPosition="left"
                  placeholder="Email Address"
                  onChange={this.inputHandler}
                  type="email"
                />

                <Form.Input
                  fluid
                  name="password"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  onChange={this.inputHandler}
                  type="password"
                />

                <Form.Input
                  fluid
                  name="passwordConfirmation"
                  icon="repeat"
                  iconPosition="left"
                  placeholder="Password Confirmation"
                  onChange={this.inputHandler}
                  type="password"
                />

                <Button primary fluid size="large">
                  Register
                </Button>
              </Segment>
            </Form>
            <Message>
              Already a user? <Link to="/login">Login</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </Aux>
    );
  }
}

export default Register;
