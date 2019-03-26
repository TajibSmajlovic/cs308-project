import React from "react";
import { Button, Grid, Header, Message } from "semantic-ui-react";

const test = () => (
  <Grid container style={{ padding: "5em 0em" }}>
    <Grid.Row>
      <Grid.Column>
        <Message>
          <Header as="h1">Hello, world!</Header>
          <p>
            This is a template for a simple marketing or informational website.
            It includes a large callout called a jumbotron and three supporting
            pieces of content. Use it as a starting point to create something
            more unique.
          </p>
          <Button color="blue">Learn more &raquo;</Button>
        </Message>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default test;
