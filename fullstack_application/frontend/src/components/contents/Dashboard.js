import React from "react";
import AddForm from "./AddForm";
import Contents from "./Contents";
import { Container } from "semantic-ui-react";
export default function Dashboard() {
	return (
		<Container style={{ marginTop: '2%' }}>
			<AddForm />
			<Contents />
		</Container>
	);
}
