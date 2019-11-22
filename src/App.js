import React from "react";
import "./App.css";
import toDoData from "./toDoData";
import TodoItem from "./TodoItem";
function App() {
	const toDoItemsArray = toDoData.map((item) => (
		<TodoItem key={item.id} item={item} />
	));

	console.log(toDoItemsArray);

	return <div className="App">{toDoItemsArray}</div>;
}

export default App;
