import React from "react";
import { withRouter } from 'react-router-dom'
import { Grid, Menu, Input } from "semantic-ui-react";

class test extends React.Component {

	state = { activeItem: 'home' }

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {

		console.log(this.props)

		const { activeItem } = this.state

		return (
			<Grid >
				<Grid.Row>
					<Grid.Column>
						<Menu secondary>
							<Menu.Item icon='tags' onClick={this.handleItemClick} />
							<Menu.Item name='cinema' active={activeItem === 'cinema'} onClick={this.handleItemClick} />
							<Menu.Item
								name='theater'
								active={activeItem === 'theater'}
								onClick={this.handleItemClick}
							/>
							<Menu.Item
								name='party'
								active={activeItem === 'party'}
								onClick={this.handleItemClick}
							/>
							<Menu.Menu position='right'>
								<Menu.Item>
									<Input icon='search' placeholder='Search...' />
								</Menu.Item>
								<Menu.Item
									name='login'
									onClick={() => this.props.history.push('/login')}
									/>
								<Menu.Item
									name='register'
									onClick={() => this.props.history.push('/register')}
								/>
								{/* <Menu.Item
									name='logout'
								/> */}
							</Menu.Menu>
						</Menu>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}
export default withRouter(test);