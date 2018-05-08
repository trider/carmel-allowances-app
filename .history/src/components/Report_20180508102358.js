import React, {Component} from 'react';
import { Button,Panel,Form,FormGroup,FormControl,ControlLabel } from 'react-bootstrap';

class Report extends Component {

	constructor(props) {
		super(props);
		this.state = {
			report: [],
			name:'',
			value:'',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlePrev = this.handlePrev.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}

	handleChange(event) {
		if (event.target.name === 'name') {
			this.setState({name: event.target.value});
		} else {
			this.setState({cost: event.target.value});
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		let list = this.state.report
		list.push[{
			name: this.state.name,
			cost: this.state.cost
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
					<FormControl
						ktype="text"
						name="name"
						placeholder="Item name" value={this.state.item} onChange={this.handleChange} />
				</FormGroup>
				<FormGroup controlId="formItem">
					 <ControlLabel>cost</ControlLabel>
					<FormControl type="number"
						name="cost"
						placeholder="Cost" value={this.state.cost} onChange={this.handleChange} />
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

	getItems() {
		const terms = this.state.report((item,key) =>
					<div key={key}>
							<p className="Term-title">Name: {item.name}</p>
							<p className="Term-body">Cost: {item.value}</p>
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