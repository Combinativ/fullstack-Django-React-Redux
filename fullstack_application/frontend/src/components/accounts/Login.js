import React, { Component } from "react";
import { Button, Form, Container } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../redux/actions/authAction";
export class Login extends Component {
	state = {
		email: "",
		password: "",
	};
	static propTypes = {
		login: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool,
	};
	handleOnChange = (e) =>
		this.setState({
			[e.target.name]: e.target.value,
		});
	handleOnSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);

		this.props.login(this.state.email, this.state.password);
	};
	render() {
		if (this.props.isAuthenticated) {
			console.log("yeet to dashboard");

			return <Redirect to="/" />;
		}
		const { email, password } = this.state;
		return (
			<Container>
				<Form>
					<h3>Login</h3>
					<Form.Group widths="equal">
						<Form.Input
							name="email"
							fluid
							label="Email"
							placeholder="Email"
							onChange={this.handleOnChange}
							value={email}
						/>
						<Form.Input
							fluid
							name="password"
							label="Password"
							placeholder="Password"
							type="password"
							onChange={this.handleOnChange}
							value={password}
						/>
					</Form.Group>
					<p>
						Register a user?
						<Link to="/register"> register</Link>
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

export default connect(mapStateToProps, { login })(Login);
