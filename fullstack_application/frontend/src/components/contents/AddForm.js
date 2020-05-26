import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import PropTypes from "prop-types";
//redux stuff
import { connect } from "react-redux";
import { addContent } from "../../redux/actions/contentAction";

export class AddForm extends Component {
	state = {
		name: "",
		email: "",
		message: "",
	};
	static propTypes = {
		addContent: PropTypes.func.isRequired,
	};
	handleOnchange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleOnSubmit = (e) => {
		e.preventDefault();
		const { name, email, message } = this.state;
		const content = { name, email, message }; //constructing the payload
		this.props.addContent(content);
	};
	render() {
		const { name, email, message } = this.state;
		return (
			<Form>
				<h1>Add Content</h1>
				<Form.Field>
					<label>Name</label>
					<input
						value={name}
						onChange={this.handleOnchange}
						name="name"
						placeholder="Full Name"
					/>
				</Form.Field>
				<Form.Field>
					<label>Email</label>
					<input
						value={email}
						onChange={this.handleOnchange}
						name="email"
						placeholder="Email"
					/>
				</Form.Field>
				<Form.Field>
					<label>Message</label>
					<input
						value={message}
						onChange={this.handleOnchange}
						name="message"
						placeholder="Message"
					/>
				</Form.Field>
				<Button onClick={this.handleOnSubmit} type="submit">
					Submit
				</Button>
			</Form>
		);
	}
}

export default connect(null, { addContent })(AddForm);
// we dont need the redux state here so mapStateToProps is set to null
// the action addContent is required
