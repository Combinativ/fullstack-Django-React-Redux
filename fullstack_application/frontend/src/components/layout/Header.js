import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
export class Header extends Component {
	state = { activeItem: "home" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });
	render() {
		const { activeItem } = this.state;

		return (
			<Segment inverted>
				<Menu stackable size="massive" inverted pointing secondary>
					<Menu.Item header>FullStAck</Menu.Item>
					<Menu.Menu position="right">
						<Menu.Item
							name="home"
							active={activeItem === "home"}
							onClick={this.handleItemClick}
						/>
						<Menu.Item
							name="messages"
							active={activeItem === "messages"}
							onClick={this.handleItemClick}
						/>
					</Menu.Menu>
				</Menu>
			</Segment>
		);
	}
}

export default Header;
