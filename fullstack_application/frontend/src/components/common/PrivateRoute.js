import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Segment, Dimmer, Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
	<Route
		{...rest}
		render={(props) => {
			if (auth.isLoading) {
				return (
					<Segment>
						<Dimmer active>
							<Loader size="massive">Loading</Loader>
						</Dimmer>
					</Segment>
				);
			} else if (!auth.isAuthenticated) {
				return <Redirect to="/login" />;
			} else {
				return <Component {...props} />;
			}
		}}
	/>
);
const mapStateToProps = (state) => ({
	auth: state.authReducer,
});

export default connect(mapStateToProps)(PrivateRoute);
