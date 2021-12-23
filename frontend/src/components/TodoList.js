import React from "react";

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
    return (
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {todos.map((todo) => (
                <li key={todo.id} style={{ marginBottom: "10px" }}>
                    <label
                        style={{
                            textDecoration: todo.completed
                                ? "line-through"
                                : "none",
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => onToggleTodo(todo.id)}
                            style={{ marginRight: "10px" }}
                        />
                        {todo.text}
                    </label>
                    <button
                        onClick={() => onDeleteTodo(todo.id)}
                        style={{ marginLeft: "20px", padding: "5px 10px" }}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
