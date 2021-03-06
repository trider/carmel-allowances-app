import React, {Component} from 'react';
import { Button,Panel,Form,FormGroup,FormControl,ControlLabel } from 'react-bootstrap';

class Report extends Component {

	constructor(props) {
		super(props);
		this.state = {
			report: [],
			item:'',
			value:'',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlePrev = this.handlePrev.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}

	handleChange(event) {
		if (event.target.name === 'item') {
			this.setState({item: event.target.value});
		} else {
			this.setState({value: event.target.value});
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		let list = this.state.report
		list.push[{
			item: this.state.item,
			value: this.state.value
		}]
	}

	handlePrev(event) {
		event.preventDefault();
		this.setState({isAuthenticated: false});
	}
	handleNext(event) {
		event.preventDefault();
		this.setState({isAuthenticated: false});
	}

	displayForm() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<FormGroup controlId="formItem">
					 <ControlLabel>Item</ControlLabel>
					<FormControl type="text"
						name="item"
						placeholder="Item" value={this.state.item} onChange={this.handleChange} />
				</FormGroup>
				<FormGroup controlId="formItem">
					 <ControlLabel>cost</ControlLabel>
					<FormControl type="text"
						name="cost"
						placeholder="ammount" value={this.state.cost} onChange={this.handleChange} />
				</FormGroup>
				<FormGroup>
						<Button type="submit">Submit</Button>
				</FormGroup>
			</Form>
		)
	}

	displayItem() {
		return (
			<Panel>
				<Panel.Heading>
					<Panel.Title componentClass="h3">Reports</Panel.Title>
				</Panel.Heading>
				<Panel.Body>
					 {this.displayForm()}
				</Panel.Body>
			</Panel>
		)
	}

	getTerms() {
		const terms = data.terms.map((term) =>
					<div className="Term-container" key={term.id}>
							<p className="Term-title">{term.id}: {term.name}</p>
							<p className="Term-body">{term.description}</p>
				</div>
  );
  return terms
	}

	displayReport() {
		return (
			<Panel>
				<Panel.Heading>
					<Panel.Title componentClass="h3">Report</Panel.Title>
				</Panel.Heading>
				<Panel.Body>
					<p>Items: {this.state.report.length}</p>
					<p></p>
				</Panel.Body>
			</Panel>
		)
	}

	render() {
		return (
			<div className="App-container">
			 {this.displayReport()}	
				{this.displayItem()}
			</div>
		)
	}
}

export default Report;