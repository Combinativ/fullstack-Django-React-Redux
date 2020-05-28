import React, { Component } from "react";
import { Button, Form, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
export class Register extends Component {
	state = {
		username: "",
		email: "",
		password: "",
		password2: "",
	};
	render() {
		return (
			<Container>
				<Form>
					<h3>Register</h3>
					<Form.Group widths="equal">
						<Form.Input
							fluid
							name="name"
							label="Username"
							placeholder="Username"
						/>
						<Form.Input fluid name="email" label="Email" placeholder="Email" />
						<Form.Input
							fluid
							label="Password"
							placeholder="Password"
							type="password"
							name="password"
						/>
						<Form.Input
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
					<Button type="submit">Submit</Button>
				</Form>
			</Container>
		);
	}
}

export default Register;
