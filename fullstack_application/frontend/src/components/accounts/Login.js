import React, { Component } from "react";
import { Button, Form, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
export class Login extends Component {
	state = {
		username: "",
		password: "",
	};
	render() {
		return (
			<Container>
				<Form>
					<h3>Login</h3>
					<Form.Group widths="equal">
						<Form.Input fluid label="Username" placeholder="Username" />
						<Form.Input
							fluid
							label="Password"
							placeholder="Password"
							type="password"
						/>
					</Form.Group>
					<p>
						Register a user?
						<Link to="/register"> register</Link>
					</p>
					<Button type="submit">Submit</Button>
				</Form>
			</Container>
		);
	}
}

export default Login;
