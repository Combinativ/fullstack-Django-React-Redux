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
			<Container style={{ marginTop: '2%' }}>
				<Form style={{maxWidth: '600px', margin: 'auto'}}>
						<h1>Login</h1>
						<Form.Input
							name="email"
							fluid
							label={<label style={{color: 'grey'}}>Email</label>}
							placeholder="Email"
							onChange={this.handleOnChange}
							value={email}
						/>
						<Form.Input
							fluid
							name="password"
							label={<label style={{color: 'grey'}}>Password</label>}
							placeholder="Password"
							type="password"
							onChange={this.handleOnChange}
							value={password}
						/>
					<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '6%'}}>
						<p>
							Register a user?
							<Link to="/register"> register</Link>
						</p>
						<Button onClick={this.handleOnSubmit} type="submit" color='teal'>
							Submit
						</Button>
					</div>
				</Form>
			</Container>
		);
	}
}
const mapStateToProps = (state) => ({
	isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
