import React, { Component } from "react";
import { withRouter} from "react-router-dom";
import { Grid, Menu, Input } from "semantic-ui-react";
import { connect } from 'react-redux'
import * as actions from '../../store/creators/auth-creators'
import Aux from "../../hoc/Auxiliary/Auxiliary";
import NavLogo from '../../components/NavLogo/NavLogo';git 
import "./Navigation.css";

class Navigation extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => { 
    this.setState({ activeItem: name }); 
    
  };

  render() {
    const { activeItem } = this.state;
    const { search } = this.props;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Menu secondary>
				<Menu.Item>
					<NavLogo/>
				</Menu.Item>
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
              {this.props.user && this.props.user.role === 'admin' ? (
                <Menu.Item
                  name="createEvent"
                  active={activeItem === "createEvent"}
                  onClick={() => this.props.history.push("/create-event")}
                />
              ) : null}
              <Menu.Menu position="right">
                <Menu.Item>
                  <Input onChange={search} icon="search" placeholder="Search..." />
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
