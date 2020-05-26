import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "proptypes";
import { Table } from "semantic-ui-react";
import { getContents, deleteContent } from "../../redux/actions/contentAction"; //action to get content related actions
export class Contents extends Component {
	static propTypes = {
		contents: PropTypes.array.isRequired,
	};
	componentDidMount() {
		this.props.getContents();
	}
	render() {
		return (
			<div>
				<h1>Content List</h1>
				<Table celled unstackable>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>ID</Table.HeaderCell>
							<Table.HeaderCell>Name</Table.HeaderCell>
							<Table.HeaderCell>Email</Table.HeaderCell>
							<Table.HeaderCell>Message</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{this.props.contents.map((content) => (
							<Table.Row key={content.id}>
								<Table.Cell>{content.name}</Table.Cell>
								<Table.Cell>{content.email}</Table.Cell>
								<Table.Cell>{content.message}</Table.Cell>
								<Table.Cell selectable negative>
									<a
										href="#"
										onClick={this.props.deleteContent.bind(this, content.id)}
									>
										Delete
									</a>
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	contents: state.contents.contents, //state.contents points to the contentReducer from src/redux/reducers
});
export default connect(mapStateToProps, { getContents, deleteContent })(
	Contents
);
