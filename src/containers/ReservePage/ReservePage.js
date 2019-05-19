import React, { Component } from "react";
import { Modal, Button, Header } from "semantic-ui-react";

import CinemaSeats from '../SeatsMap/CinemaSeats/CinemaSeats'

export default class ReservePage extends Component {
  render() {
    const date = new Date(this.props.event.date).toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    return (
      <Modal
        trigger={<Button>Book now</Button>}
        dimmer
        style={{ overflow: "auto" }}
      >
        <Modal.Header style={{ textAlign: "center" }}>
          Reserve Seats
        </Modal.Header>
        <Modal.Content image>
          <div style={{ width: "50%", height: "500px", backgroundImage: `url('${this.props.event.imgUrl}')`, backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '10px'}}>

          </div>
          <Modal.Description style={{ width: "50%", marginLeft: "10%" }}>
            <Header>{this.props.event.title}</Header>
            <p style={{ textAlign: "justify" }}>
              {this.props.event.description}
            </p>
            {/* <div style={{ width: 150, height: 50, border: "1px solid black" }}> */}
              <p>On <b>{date}</b> at <b>{this.props.event.time}</b> in <b>{this.props.event.venue}</b></p>
            {/* </div> */}
            <b>PRICE: 10 BAM (per seat)</b>
          </Modal.Description>
        </Modal.Content>
        <hr />
		  <Modal.Content scrolling>
			  <Header as="h3" textAlign="center" content="SELECT SEATS" />
			  <div
				  style={{
					  width: "70%",
					  border: "1px solid black",
					  margin: "auto",
					  padding: 20
				  }}
			  >
				  <CinemaSeats />
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
