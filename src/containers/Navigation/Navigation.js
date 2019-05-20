import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Grid, Menu, Input } from "semantic-ui-react";
import { connect } from 'react-redux'
import * as actions from '../../store/creators/auth-creators'
import Aux from "../../hoc/Auxiliary/Auxiliary";

class Navigation extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => { this.setState({ activeItem: name }); this.props.history.push("/")};

  render() {
    const { activeItem } = this.state;

    return (
      <Grid style={{ height: "8vh" }}>
        <Grid.Row>
          <Grid.Column>
            <Menu secondary>
              <Menu.Item icon="tags" onClick={this.handleItemClick} />
              <Menu.Item
                name="cinema"
                active={activeItem === "cinema"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="theater"
                active={activeItem === "theater"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="party"
                active={activeItem === "party"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="createEvent"
                active={activeItem === "createEvent"}
                onClick={() => this.props.history.push("/create-event")}
              />
              <Menu.Menu position="right">
                <Menu.Item>
                  <Input icon="search" placeholder="Search..." />
                </Menu.Item>
                {this.props.user ? (
                    <Menu.Item
                      name='logout'
                      onClick={this.props.logout}
                    />
                ): (
                  <Aux>
                    <Menu.Item
                      name="login"
                      onClick={() => this.props.history.push("/login")}
                      />
                    <Menu.Item
                      name="register"
                      onClick={() => this.props.history.push("/register")}
                      />
                  </Aux>
                )}
              </Menu.Menu>
            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return{
    user: state.auth.user
  }
}

export default connect(mapStateToProps, actions)(withRouter(Navigation));
