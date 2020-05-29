import React, { Component } from "react";
import { Button, Form, Container } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../redux/actions/authAction";
import { createMessage } from "../../redux/actions/messagesAction";
export class Register extends Component {
	state = {
		username: "",
		email: "",
		password: "",
		password2: "",
	};
	static propTypes = {
		register: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool,
	};
	handleOnChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleOnSubmit = (e) => {
		e.preventDefault();
		const { username, email, password, password2 } = this.state;
		if (password !== password2)
			this.props.createMessage({
				passwordMismatch: "Passwords do not match (-__-)",
			});
		else {
			const newUser = { username, password, email };
			this.props.register(newUser);
		}
	};
	render() {
		if (this.props.isAuthenticated) return <Redirect to="/" />;
		return (
			<Container>
				<Form>
					<h3>Register</h3>
					<Form.Group widths="equal">
						<Form.Input
							onChange={this.handleOnChange}
							fluid
							name="username"
							label="Username"
							placeholder="Username"
						/>
						<Form.Input
							onChange={this.handleOnChange}
							fluid
							name="email"
							label="Email"
							placeholder="Email"
						/>
						<Form.Input
							onChange={this.handleOnChange}
							fluid
							label="Password"
							placeholder="Password"
							type="password"
							name="password"
						/>
						<Form.Input
							onChange={this.handleOnChange}
							fluid
							label="Confirm Password"
							placeholder="Confirm Password"
							type="password"
							name="password2"
						/>
					</Form.Group>
					<p>
						Already a user?
						<Link to="/login"> login</Link>
					</p>
					<Button onClick={this.handleOnSubmit} type="submit">
						Submit
					</Button>
				</Form>
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
