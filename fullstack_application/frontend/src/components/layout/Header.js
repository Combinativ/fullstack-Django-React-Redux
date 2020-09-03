import React, { Component } from "react";
import { Menu, Segment, Header as UIHeader, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Login from "../accounts/Login";
import Register from "../accounts/Register";
//redux
import { connect } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import PropTypes from "prop-types";

export class Header extends Component {
	state = { activeItem: "home" };
	static propType = {
		auth: PropTypes.object.isRequired,
		logout: PropTypes.func.isRequired,
	};
	handleOnLogout = (e) => {
		e.preventDefault();
		this.props.logout();
	};
	handleItemClick = (e, { name }) => this.setState({ activeItem: name });
	render() {
		const { activeItem } = this.state;
		const { isAuthenticated, user } = this.props.auth;
		const authLinks = (
			<Menu.Menu position="right">
				<Menu.Item>
					<UIHeader inverted size="small">
						Hi, {user ? user.username : ""}
					</UIHeader>
				</Menu.Item>
				<Menu.Item>
					<Button circular compact onClick={this.handleOnLogout} negative>
						Logout
					</Button>
				</Menu.Item>
			</Menu.Menu>
		);
		const guestLinks = (
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
		);
		return (
				<Menu stackable size="massive" style={{backgroundColor: '#212121'}} inverted pointing secondary>
					<Menu.Item header as={Link} to="/">
						FullStAck
					</Menu.Item>
					{isAuthenticated ? authLinks : guestLinks}
				</Menu>
		);
	}
}
const mapStateToProps = (state) => ({
	auth: state.authReducer,
});
export default connect(mapStateToProps, { logout })(Header);
