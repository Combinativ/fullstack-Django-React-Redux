import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Alerts from "./layout/Alerts";
import Dashboard from "./contents/Dashboard";
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
					<Fragment>
						<Header />
						<Alerts />
						<Segment attached>
							<Dashboard />
						</Segment>
					</Fragment>
				</AlertProvider>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("combinativ_app"));
