import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Divider, TextArea, Segment, Header, Dropdown } from 'semantic-ui-react'

const creditCardsOptions = [
	{ key: 'visa', text: 'Visa', value: 'visa' },
	{ key: 'mastercard', text: 'MasterCard', value: 'mastercard' },
]

const monthsOtpions = [
	{ key: 'january', text: 'January', value: 'january' },
	{ key: 'february', text: 'February', value: 'february' },
	{ key: 'march', text: 'March', value: 'march' },
]

const creditCardsDropdown = () => (
	<Dropdown placeholder='Type' fluid selection options={creditCardsOptions} />
)

const monthsDropdown = () => (
	<Dropdown placeholder='Type' selection options={monthsOtpions} />
)

class CreditCardPayment extends Component {
	state = {}


	render() {
		return (
			<Segment style={{maxWidth: '70%', maxHeight: '65%', margin: 'auto', border: '1px solid black', borderRadius: 15, boxShadow: '37px 29px 5px 0px rgba(0,0,0,0.75)'}}>
				<Form style={{maxWidth: '90%', margin: 'auto'}}>
					<Header as='h2' content='Payment Information' textAlign='center'/>
					<Divider/>
					<Form.Group widths='equal'>
						<Form.Field control={Input} label='First name' placeholder='First name' />
						<Form.Field control={Input} label='Last name' placeholder='Last name' />
					</Form.Group>
					<Form.Field control={TextArea} label='Comments' placeholder='Comments...' />
					<Header as='h5' content='Billing Information'/>
					<Divider/>
					<Form.Field label='Card Type' control={creditCardsDropdown}/>
					<Form.Group>
						<Form.Input label='Card Number' placeholder='Card #' width={8} />
						<Form.Input label='CVC' placeholder='CVC' width={2} />
						<Form.Input label='Expiration' control={monthsDropdown} placeholder='2 Wide' />
						<Form.Input label='Year' placeholder='Year' width={2} />
					</Form.Group>
					<Divider hidden />
					<Form.Field style={{textAlign: 'left'}} control={Checkbox} label='I agree to the Terms and Conditions' />
					<Button content='Proceed' primary/>
				</Form>
			</Segment>
		)
	}
}

export default CreditCardPayment
