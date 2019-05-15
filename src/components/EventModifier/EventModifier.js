import React, { Component } from 'react';
import { Grid, Header, Form, Select } from 'semantic-ui-react'
import './EventModifier.css'
import ImagePicker from '../ImagePicker/ImagePicker';

class EventModifier extends Component {
    render() {
        return (
            <div style={{ padding: "50px" }}>
                <Header as="h1" textAlign="center">Create New Event</Header>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <Form>
                                <Form.Field>
                                    <label>Title</label>
                                    <input placeholder='Title' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Description</label>
                                    <textarea  placeholder='Short description...' />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Group unstackable widths={2}>
                                        <Form.Input type="date" label='Date' />
                                        <Form.Input label='Time' type="time" />
                                    </Form.Group>
                                </Form.Field>
                                <Form.Field>
                                    <label>Venue</label>
                                    <Select placeholder="Choose Venue" options={[
                                        {key: '1', value: "rah", text: "Royal Albert Hall"},
                                        {key: '2', value: "mad", text: "Madison Square Garden"},
                                    ]}/>
                                </Form.Field>
                            </Form>
                        </Grid.Column>
                        <Grid.Column>
                            <ImagePicker />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default EventModifier;