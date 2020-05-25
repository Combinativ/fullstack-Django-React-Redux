import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layout/Header";
import Dashboard from "./contents/Dashboard";
import { Segment } from "semantic-ui-react";
class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Segment attached>
					<Dashboard />
				</Segment>
			</Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("combinativ_app"));
