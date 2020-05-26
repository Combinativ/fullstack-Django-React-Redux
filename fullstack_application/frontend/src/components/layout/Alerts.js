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
		const { error, alert, message } = this.props;
		if (error !== prevProps.error) {
			if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`); //django returns an array as a response hence using join() to convert it to string
			if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
			if (error.msg.message)
				alert.error(`message: ${error.msg.message.join()}`);
		}
		if (message !== prevProps.message) {
			if (message.deleteContent) alert.success(message.deleteContent);
			if (message.addedContent) alert.success(message.addedContent);
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
export default connect(maStateToProps)(withAlert()(Alerts));
