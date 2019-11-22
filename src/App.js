import React, { Component } from "react";
import "./App.css";
import toDoData from "./toDoData";
import TodoItem from "./TodoItem";

//state is a way for a componet to maintain and change it's own data if it needs to
//rather than props where we are just passing in data. for state to be used
//the component needs to be a class based component, component need component
//they initialize the values in the class, they can inherit from the superclass of react componet

export class App extends Component {
	constructor() {
		super();
		this.state = {
			name: "Artem",
			age: "26",
			answer: "This is a state check"
		};
	}
	//passing down state is like passing down props within a componet tag</>
	//the difference is the reference to the this keyword
	render() {
		return (
			<div>
				{toDoItemsArray}
				<h1>{this.state.answer}</h1>
				<h1>{this.state.name}</h1>
				<h1>{this.state.age}</h1>
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
