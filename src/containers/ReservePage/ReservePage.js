import React, { Component } from "react";
import { Modal, Button, Image, Header } from "semantic-ui-react";

export default class ReservePage extends Component {
  render() {
    return (
      <Modal
        trigger={<Button>Show Modal</Button>}
        dimmer
        style={{ overflow: "auto" }}
      >
        <Modal.Header style={{ textAlign: "center" }}>
          Reserve Seats
        </Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src="https://img.moviepostershop.com/replicas-movie-poster-2019-1000778791.jpg"
          />
          <Modal.Description style={{ width: "50%", marginLeft: "10%" }}>
            <Header>Name of the event</Header>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos eum
              ipsa voluptatibus! Adipisci aspernatur consequatur dolor, dolorum
              incidunt iure libero minima nisi nostrum odit ratione suscipit
              tenetur unde ut veniam! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Eos eum ipsa voluptatibus! Adipisci aspernatur
              consequatur dolor, dolorum incidunt iure libero minima nisi
              nostrum odit ratione suscipit tenetur unde ut veniam! Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Eos eum ipsa
              voluptatibus! Adipisci aspernatur consequatur dolor, dolorum
              incidunt iure libero minima nisi nostrum odit ratione suscipit
              tenetur unde ut veniam! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Eos eum ipsa voluptatibus! Adipisci aspernatur
              consequatur dolor, dolorum incidunt iure libero minima nisi
              nostrum odit ratione suscipit tenetur unde ut veniam!
            </p>
            <div style={{ width: 150, height: 50, border: "1px solid black" }}>
              <b>[12.04.2018]</b> -<b>20:00h</b>
            </div>
            <b>PRICE: $$ (per seat)</b>
          </Modal.Description>
        </Modal.Content>
        <hr />
        <Modal.Content scrolling>
          <div style={{ width: "90%", height: 350, border: "1px solid black" }}>
            Select seats
          </div>
          <div
            style={{
              width: 150,
              height: 50,
              border: "1px solid black",
              display: "inline-block"
            }}
          >
            prive $$
          </div>
          <Button.Group floated="right">
            <Button content="PayPal" primary />
            <Button content="Card" secondary />
            <Button content="Coupon" color="teal" />
          </Button.Group>
        </Modal.Content>
      </Modal>
    );
  }
}
