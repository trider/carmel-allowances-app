import React, {Component} from 'react';
import { Button,Panel,Form,FormGroup,FormControl,ControlLabel } from 'react-bootstrap';

class Report extends Component {

	constructor(props) {
		super(props);
		this.state = {
			report: [],
			name:'',
			cost:'',
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);
		
	}

	updateReport(event) {
		if (event.target.name === 'name') {
			this.setState({name: event.target.value});
		}
		else{
			this.setState({cost: event.target.value});
		}
	}

	handleChange(event) {
		if (this.state.report.length < 5) {
				this.updateReport(event)
		}
		else {
			alert('You entered 5 items. \n P')
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		let list = this.state.report
		list.push({
			name: this.state.name,
			cost: this.state.cost
		});
		this.setState({report:list})
	}

	handleReset(event) {
		this.setState({
			report: [],
			name:'',
			cost:'',
		})
	}


	displayForm() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<FormGroup controlId="formItem1">
				<ControlLabel>Item</ControlLabel>
					<FormControl
						ktype="text"
						name="name"
						placeholder="Item name" value={this.state.item} onChange={this.handleChange} />
	    <br/>
					 <ControlLabel>Cost</ControlLabel>
					<FormControl 
						name="cost"
						placeholder="Cost" value={this.state.cost} onChange={this.handleChange} />
				</FormGroup>
				<FormGroup>
					<Button type="submit">Submit</Button>
					<Button onClick={this.handleReset} >Reset</Button>
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
		const items = this.state.report.map((item, key) =>
				<p>Item: {key}, Name: {item.name}, Cost: {item.cost}</p>
  );
  return items
	}

	displayReport() {
		return (
			<Panel>
				<Panel.Heading>
					<Panel.Title componentClass="h3">Report</Panel.Title>
				</Panel.Heading>
				<Panel.Body>
					<p>Items: {this.state.report.length}</p>
					{this.getItems()}
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