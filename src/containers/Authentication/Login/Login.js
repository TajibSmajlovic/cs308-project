import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link, Redirect } from "react-router-dom";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message
} from "semantic-ui-react";

import styles from "./Login.module.css";
import Aux from "../../../hoc/Auxiliary/Auxiliary";

import * as actions from '../../../store/creators/async-creators'

class Register extends Component {
  state = {
    email: "",
    password: ""
  };

  // Taking the input from forms
  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submit = () => {
    this.props.login({...this.state})
  };

  isValid = () => {
    return this.state.email && this.state.password
  }

  render() {
    if(this.props.user) return <Redirect to='/' />

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

                <Button disabled={!this.isValid()} primary fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              Don't have an account? <Link to="/register">Register</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return{
    user: state.auth.user
  }
}

export default connect(mapStateToProps, actions)(Register);
