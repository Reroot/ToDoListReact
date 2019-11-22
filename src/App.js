import React, { Component } from "react";
import "./App.css";
import toDoData from "./toDoData";
import TodoItem from "./TodoItem";

export class App extends Component {
	render() {
		return <div>{toDoItemsArray}</div>;
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
