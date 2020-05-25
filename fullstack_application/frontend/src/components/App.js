import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./contents/Dashboard";
import { Segment } from "semantic-ui-react";
//Redux
import { Provider } from "react-redux";
import store from "../redux/store";
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Fragment>
					<Header />
					<Segment attached>
						<Dashboard />
					</Segment>
				</Fragment>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("combinativ_app"));
