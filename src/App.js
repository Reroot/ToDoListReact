import React, { Component } from "react";
import "./App.css";
import toDoData from "./toDoData";
import TodoItem from "./TodoItem";
import { setTimeout } from "core-js";

//conditional rendering

//state is a way for a componet to maintain and change it's own data if it needs to
//rather than props where we are just passing in data. for state to be used
//the component needs to be a class based component, component need component
//they initialize the values in the class, they can inherit from the superclass of react componet

export class App extends Component {
	//need for state
	constructor() {
		super();
		this.state = {
			count: 0,
			isLoading: true
		};

		this.handelClick = this.handelClick.bind(this);
		// this.state = {
		// 	name: "Artem",
		// 	age: "26",
		// 	answer: "This i
		//  a state check",
		// 	log: true
		// };
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isLoading: false
			});
		}, 1000);
	}
	handelClick() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			};
		});
	}

	//passing down state is like passing down props within a componet tag</>
	//the difference is the reference to the this keyword
	render() {
		// let wordDisplay;
		// if (this.state.log === false) {
		// 	wordDisplay = "logged false as out";
		// } else {
		// 	wordDisplay = "logged false as in";
		// }
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.handelClick}>Change</button>
				<h1>
					{this.state.isLoading ? console.log("true") : console.log("false")}
				</h1>
				{toDoItemsArray}
				{/* <h1>{this.state.log ? this.state.name : this.state.answer}</h1>
				<h1>{wordDisplay}</h1>
				<h1>{this.state.age}</h1> */}
			</div>
		);
	}
}

const toDoItemsArray = toDoData.map((item) => (
	<TodoItem key={item.id} item={item} />
));

// function createList() {
// 	const toDoItemsArray = toDoData.map((item) => (
// 		<TodoItem key={item.id} item={item} />
// 	));

// 	console.log(toDoItemsArray);

// 	return { toDoItemsArray };
// }

export default App;
