import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "proptypes";
import { Table } from "semantic-ui-react";
import { getContents, deleteContent } from "../../redux/actions/contentAction"; //action to get content related actions
export class Contents extends Component {
	static propTypes = {
		contents: PropTypes.array.isRequired,
		getContents: PropTypes.func.isRequired,
		deleteContent: PropTypes.func.isRequired,
	};
	componentDidMount() {
		this.props.getContents();
	}
	render() {
		return (
			<div style={{marginTop: '6%'}}>
				<h1>Content List</h1>
				<Table celled unstackable inverted>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>ID</Table.HeaderCell>
							<Table.HeaderCell>Name</Table.HeaderCell>
							<Table.HeaderCell>Message</Table.HeaderCell>
							<Table.HeaderCell>Action</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{this.props.contents.map((content) => (
							<Table.Row key={content.id}>
								<Table.Cell width={1}>{content.id}</Table.Cell>
								<Table.Cell width={4}>{content.name}</Table.Cell>
								<Table.Cell width={7}>{content.message}</Table.Cell>
								<Table.Cell width={2} selectable onClick={this.props.deleteContent.bind(this, content.id)}>
									<a style={{color: 'grey'}}>Click to Delete</a>
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
	// we are bringing in the store from redux state
	contents: state.contentReducer.contents, //points to the contentReducer from src/redux/reducers
});
export default connect(mapStateToProps, { getContents, deleteContent })(
	Contents
);
