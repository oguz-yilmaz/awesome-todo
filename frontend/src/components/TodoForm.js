import React, { useState } from "react";

function TodoForm({ onAddTodo }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAddTodo(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
                type="text"
                value={text}
                placeholder="Add a new todo..."
                onChange={(e) => setText(e.target.value)}
                style={{ padding: "10px", width: "250px" }}
            />
            <button
                type="submit"
                style={{ marginLeft: "10px", padding: "10px" }}
            >
                Add Todo
            </button>
        </form>
    );
}

export default TodoForm;
