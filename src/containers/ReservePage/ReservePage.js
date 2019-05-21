import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Modal, Button, Header } from "semantic-ui-react";
import * as actions from '../../store/creators/async-creators'
import CinemaSeats from '../SeatsMap/CinemaSeats/CinemaSeats'

class ReservePage extends Component {

  state = {
    seats: [],
    currentPurchase: [],
  }

  changeHandler = (id) => {
    const { seats } = this.state
    if(seats[id - 1].user){
      if(seats[id - 1].user == this.props.user._id && this.state.currentPurchase.indexOf(id) != -1){
        seats[id - 1].user = null;
        this.setState(prev => ({
          seats,
          currentPurchase: prev.currentPurchase.filter(seatId => seatId != id)
        }))
      }
    }else{
      seats[id - 1].user = this.props.user._id
      this.setState(prev => ({
        seats,
        currentPurchase: prev.currentPurchase.concat(id)
      }))
    }
  }

  componentDidMount(){
    this.setState({
      seats: this.props.event.seats
    })
  }

  book = () => {
    this.props.book({ id: this.props.event._id, seats: this.state.seats })
      .then(res => {
        this.props.history.replace('/')
      })
  }

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
					  // border: "1px solid black",
					  margin: "auto",
            padding: 20,
				  }}
			  >
				  <CinemaSeats user={this.props.user} changeHandler={this.changeHandler} seats={this.state.seats}/>
			  </div>
			  <div style={{display: 'flex', alignItems: 'center'}}>
				  <h3>Price <b>{this.state.currentPurchase.length * 10} BAM</b></h3>
          <div style={{marginLeft: 'auto'}}>
            <Button content="Card" primary />
            <Button content="PayPal" secondary />
          </div>
        </div>
        <Button content="Submit" onClick={this.book} />
		  </Modal.Content>
      </Modal>
    );
  }
}

export default connect(state => ({
  user: state.auth.user
}), actions)(withRouter(ReservePage))