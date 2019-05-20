import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
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

import * as actions from '../../../store/creators/async-creators'

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

  isValid = () => {
    let valid = this.state.username && this.state.email && this.state.password && this.state.passwordConfirmed
    if(!valid) return false
    return this.state.password === this.state.passwordConfirmed
  }

  submit = () => {
    this.props.register({...this.state})
  };

  render() {
    if(this.props.user) return <Redirect to="/" />
    return (
      <Aux>
        <Grid textAlign="center" verticalAlign="middle" className={styles.Grid}>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h1" color="blue" textAlign="center">
              [LOGO]
            </Header>
            <Form size="large" autoComplete="off" onSubmit={this.submit}>
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
                  name="passwordConfirmed"
                  icon="repeat"
                  iconPosition="left"
                  placeholder="Password Confirmation"
                  onChange={this.inputHandler}
                  type="password"
                />

                <Button primary fluid disabled={!this.isValid()} size="large">
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

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, actions)(Register);
