import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Login from "../accounts/Login";
import Register from "../accounts/Register";
export class Header extends Component {
	state = { activeItem: "home" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });
	render() {
		const { activeItem } = this.state;

		return (
			<Segment inverted>
				<Menu stackable size="massive" inverted pointing secondary>
					<Menu.Item header as={Link} to="/">
						FullStAck
					</Menu.Item>
					<Menu.Menu position="right">
						<Menu.Item
							name="register"
							active={activeItem === "register"}
							onClick={this.handleItemClick}
							as={Link}
							to="/register"
						/>
						<Menu.Item
							name="login"
							active={activeItem === "login"}
							onClick={this.handleItemClick}
							as={Link}
							to="/login"
						/>
					</Menu.Menu>
				</Menu>
			</Segment>
		);
	}
}

export default Header;
