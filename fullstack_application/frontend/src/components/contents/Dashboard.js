import React, { Fragment } from "react";
import AddForm from "./AddForm";
import Contents from "./Contents";
export default function Dashboard() {
	return (
		<Fragment>
			<AddForm />
			<Contents />
		</Fragment>
	);
}
