import React from "react";

function TodoItem(props) {
	return (
		<div className="todo-item">
			{/* //can insert in input to auto check */}
			{/* checked={props.item.complete} */}
			<input type="checkbox" />
			<h2>{props.item.text}</h2>
			{/* <p>{props.item.complete}</p> */}
		</div>
	);
}

export default TodoItem;
