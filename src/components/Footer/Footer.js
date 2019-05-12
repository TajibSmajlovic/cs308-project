import React from "react";
import { Container, Grid, List, Segment, Input } from "semantic-ui-react";

const Footer = () => (
  <Segment
    inverted
    style={{ height: "17%" }}
  >
    <Container textAlign="center">
      <Grid columns="equal">
        <Grid.Column style={{ display: 'flex', alignItems: 'flex-end' }}>
          <List inverted horizontal divided link size="medium" >
            <List.Item as="a" href="#">
              Todo #1
            </List.Item>
            <List.Item as="a" href="#">
              Todo #2
            </List.Item>
            <List.Item as="a" href="#">
              Todo #3
            </List.Item>
            <List.Item as="a" href="#">
              Todo #4
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column style={{ marginTop: 25 }}>
          <Input action="Newsletters" placeholder="Submit..." />
        </Grid.Column>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
