import React, {Component} from 'react';
import { ButtonToolbar,Button,Panel,Form,FormGroup,FormControl,ControlLabel } from 'react-bootstrap';
import '../styles/index.css';
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
		this.handleCommit = this.handleCommit.bind(this);
		
	}

	handleChange(event) {
		if (event.target.name === 'name') {
			this.setState({name: event.target.value});
		}
		else{
			this.setState({cost: event.target.value});
		}
	}
	
	updateReport() {
		let list = this.state.report
		list.push({
			name: this.state.name,
			cost: this.state.cost
		});
		this.setState({report:list})
	}
	
	handleSubmit(event) {
		event.preventDefault();
		if (this.state.report.length < 5) {
			this.updateReport()
		}
		else {
			alert("Limit exceeded. Please reset.")
		}
	}



	handleCommit(event) {
		const user = this.props.firebaseApp.auth().currentUser;
		
 let reportsCount = 0;
		this.props.firebaseApp.database().ref('reports/').on('value', (dataSnapshot) => {
			dataSnapshot.forEach((child) => { reportsCount++ });
		});
		
		this.props.firebaseApp.database().ref('reports/report-' + reportsCount).set({
			id: reportsCount,
			data:this.state.report
  }).then(function () {
			alert("Done")
			this.resetList()
	}).catch(function (error) {
			console.log(error)
		});
	}

	resetList() {
			this.setState({
				report: [],
				name:'',
				cost:'',
		})
	}

	handleReset(event) {
	event.preventDefault();
		this.resetList()
	}


	displayForm() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<FormGroup controlId="formItem1">
				<ControlLabel>Item</ControlLabel>
					<FormControl
						type="text"
						name="name"
						placeholder="Item name" value={this.state.name} onChange={this.handleChange} />
	    <br/>
					 <ControlLabel>Cost</ControlLabel>
					<FormControl 
						name="cost"
						placeholder="Cost" value={this.state.cost} onChange={this.handleChange} />
				</FormGroup>
				<FormGroup>
				<ButtonToolbar>
						<Button bsStyle="success" type="submit">Submit</Button>
					</ButtonToolbar>	
				</FormGroup>
			</Form>
		)
	}

	displayItem() {
		return (
			<Panel>
				<Panel.Heading>
					<Panel.Title componentClass="h3">Add item</Panel.Title>
				</Panel.Heading>
				<Panel.Body>
					 {this.displayForm()}
				</Panel.Body>
			</Panel>
		)
	}

	getItems() {
		const items = this.state.report.map((item, key) =>
			<p key={key}>Item: {key}, Name: {item.name}, Cost: {item.cost}</p>
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
					<ButtonToolbar>
						<Button bsStyle="success" onClick={this.handleCommit}>Update database</Button>
						<Button bsStyle="danger" onClick={this.handleReset} >Reset</Button>
					</ButtonToolbar>	
				</Panel.Body>
			</Panel>
		)
	}

	displayUser() {
const user = this.props.firebaseApp.auth().currentUser;
if (user != null) {
	return (
		<Panel>
			<Panel.Heading>
				<Panel.Title componentClass="h3">User</Panel.Title>
			</Panel.Heading>
			<Panel.Body>
				<p>User: {user.displayName}</p>
				<p>email: {user.email}</p>
				<img src={user.photoUrl}/>

			</Panel.Body>
		</Panel>
	)
}
else {
	return <div></div>
		}

	}

	render() {
		return (
			<div className="App-container">
				{this.displayUser()}	
				{this.displayReport()}	
				{this.displayItem()}
			</div>
		)
	}
}

export default Report;