import React from "react";
import { Container, Grid, List, Segment, Header } from "semantic-ui-react";
import NavLogo from '../../components/NavLogo/NavLogo'

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
            <NavLogo/>
            <p>Sjedi.ba 2019. All Rights Reserved</p>
            <small>
            Cras facilisis hendrerit faucibus. Pellentesque mauris sapien, venenatis sed massa at, consequat aliquam nibh. Curabitur at mollis quam, quis feugiat diam. Pellentesque a cursus metus. 
            </small>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
