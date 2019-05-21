import React, { Component } from "react";
import { Grid, Header, Form, Select, Button } from "semantic-ui-react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store";
import "./EventModifier.css";
import ImagePicker from "../../components/ImagePicker/ImagePicker";

class EventModifier extends Component {
  state = {
    form: {
      title: "",
      description: "",
      date: "",
      time: "",
      venue: ""
    },
    img: {}
  };

  isValid = () => {
    let valid = true;
    Object.keys(this.state.form).map(
      key => (valid = valid && this.state.form[key])
    );
    return valid;
  };

  changeHandler = (key, value) => {
    this.setState(old => ({
      ...old,
      form: {
        ...old.form,
        [key]: value
      }
    }));
  };

  imgHandler = (data, file) => {
    this.setState({
      img: {
        src: data,
        file
      }
    });
  };

  submitHandler = () => {
    this.props.createEvent(this.state.form, this.state.img.file).then(res => {
      this.props.history.replace("/");
    });
  };

  render() {
    if (
      !this.props.user ||
      (this.props.user && this.props.user.role !== "admin")
    )
      return <Redirect to="/" />;
    return (
      <div style={{ padding: "50px", marginBottom: "12vh" }}>
        <Header as="h1" textAlign="center">
          Create New Event
        </Header>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Form onSubmit={this.submitHandler}>
                <Form.Field>
                  <label>Title</label>
                  <input
                    onChange={e => this.changeHandler("title", e.target.value)}
                    placeholder="Title"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Description</label>
                  <textarea
                    onChange={e =>
                      this.changeHandler("description", e.target.value)
                    }
                    placeholder="Short description..."
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Group unstackable widths={2}>
                    <Form.Input
                      onChange={e => this.changeHandler("date", e.target.value)}
                      type="date"
                      label="Date"
                    />
                    <Form.Input
                      onChange={e => this.changeHandler("time", e.target.value)}
                      label="Time"
                      type="time"
                    />
                  </Form.Group>
                </Form.Field>
                <Form.Field>
                  <label>Venue</label>
                  <Select
                    placeholder="Choose Venue"
                    onChange={(e, data) =>
                      this.changeHandler("venue", data.value)
                    }
                    options={[
                      {
                        key: "1",
                        value: "Royal Albert Hall",
                        text: "Royal Albert Hall"
                      },
                      {
                        key: "2",
                        value: "Madison Square Garden",
                        text: "Madison Square Garden"
                      }
                    ]}
                  />
                </Form.Field>
                <Form.Field>
                  <Button
                    onClick={() => this.props.history.replace("/")}
                    color="red"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={!this.isValid()} primary>
                    Submit
                  </Button>
                </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <ImagePicker
                img={this.state.img.src}
                imgHandler={this.imgHandler}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.auth.user }),
  actions
)(withRouter(EventModifier));
