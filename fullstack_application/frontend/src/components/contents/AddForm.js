import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import PropTypes from "prop-types";
//redux stuff
import { connect } from "react-redux";
import { addContent } from "../../redux/actions/contentAction";

export class AddForm extends Component {
	state = {
		name: "",
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
		const { name, message } = this.state;
		const content = { name, message }; //constructing the payload
		this.props.addContent(content);
	};
	render() {
		const { name, message } = this.state;
		return (
			<Form style={{marginTop: '5%'}}>
				<h1>Add Content</h1>
				<Form.Group>
				<Form.Field width={4}>
					<label style={{color: 'grey'}}>Name</label>
					<input
						value={name}
						onChange={this.handleOnchange}
						name="name"
						placeholder="Full Name"
					/>
				</Form.Field>
				<Form.Field width={8}>
					<label style={{color: 'grey'}}>Message</label>
					<input
						value={message}
						onChange={this.handleOnchange}
						name="message"
						placeholder="Message"
					/>
				</Form.Field>
				<Form.Field width={4}>
				<label style={{color: 'grey'}}>Add message</label>
				<Button onClick={this.handleOnSubmit} color='teal' type="submit">
					Submit
				</Button>
				</Form.Field>
				</Form.Group>
			</Form>
		);
	}
}

export default connect(null, { addContent })(AddForm);
// we dont need the redux state here so mapStateToProps is set to null
// the action addContent is required
