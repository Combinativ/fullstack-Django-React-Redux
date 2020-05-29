import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import {
	HashRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";

import Header from "./layout/Header";
import Alerts from "./layout/Alerts";
import Dashboard from "./contents/Dashboard";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";
import { Segment } from "semantic-ui-react";

import { Provider as AlertProvider } from "react-alert"; // Alert provider
import AlertTemplate from "react-alert-template-basic"; //put alert template here
import DarkAlertTemplate from "react-alert-template-oldschool-dark";
//Redux
import { Provider } from "react-redux";
import store from "../redux/store";

//Alert Options
const alertOptions = {
	timeout: 3000,
	position: "bottom center",
};
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				{/* Provider for react-alert package */}
				<AlertProvider template={AlertTemplate} {...alertOptions}>
					<Router>
						<Fragment>
							<Header />
							<Alerts />
							<Segment attached>
								<Switch>
									<PrivateRoute exact path="/" component={Dashboard} />
									<Route exact path="/login" component={Login} />
									<Route exact path="/register" component={Register} />
								</Switch>
							</Segment>
						</Fragment>
					</Router>
				</AlertProvider>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("combinativ_app"));
