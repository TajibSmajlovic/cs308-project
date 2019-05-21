import React from "react";
import { Container, Grid, List, Segment, Header } from "semantic-ui-react";

const Footer = () => (
  <Segment inverted vertical style={{ padding: "3em 0em", height: "20%" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">Sitemap</List.Item>
              <List.Item as="a">Contact Us</List.Item>
              <List.Item as="a">Lorem ipsum </List.Item>
              <List.Item as="a">Lorem ipsum </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header inverted as="h4" content="Services" />
            <List link inverted>
              <List.Item as="a">Pre-Order Event</List.Item>
              <List.Item as="a">Q&A</List.Item>
              <List.Item as="a">How To Reserve</List.Item>
              <List.Item as="a">Policy</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              Footer Header
            </Header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda cum, dolor eos, est facere in ipsum maxime minus nemo
              possimus praesentium, saepe soluta. Accusamus distinctio dolorum
              eius natus quo. Saepe.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
