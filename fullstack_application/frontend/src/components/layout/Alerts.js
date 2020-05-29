import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
	static proptypes = {
		error: PropTypes.object.isRequired,
		message: PropTypes.object.isRequired,
	};

	componentDidUpdate(prevProps) {
		const { error, alert, message } = this.props; // fetching specific params from props
		//Error alert display connected via errorReducer
		if (error !== prevProps.error) {
			//if error message updates then
			if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`); //django returns an array as a response hence using join() to convert it to string
			if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
			if (error.msg.message)
				alert.error(`message: ${error.msg.message.join()}`);
			if (error.msg.non_field_errors)
				alert.error(error.msg.non_field_errors.join());
			if (error.msg.username) alert.error(error.msg.username.join());
		}
		//Message alert display connected via messageReducer
		if (message !== prevProps.message) {
			if (message.deleteContent) alert.info(message.deleteContent); //if delete content message is dispatched
			if (message.addedContent) alert.success(message.addedContent); //if add content message is dispatched
			if (message.passwordMismatch) alert.error(message.passwordMismatch);
		}
	}
	render() {
		return <Fragment />;
	}
}
const maStateToProps = (state) => {
	return {
		error: state.errorReducer, //error reducer
		message: state.messageReducer,
	};
};
export default connect(maStateToProps)(withAlert()(Alerts)); // higher order components to wrap Alerts component with withAlert method and connected via Redux method
