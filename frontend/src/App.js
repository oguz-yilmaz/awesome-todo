import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/todos");
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const addTodo = async (text) => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/todos",
                { text }
            );
            setTodos((prev) => [...prev, response.data]);
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    const toggleTodo = async (id) => {
        try {
            const todoToUpdate = todos.find((t) => t.id === id);
            const response = await axios.put(
                `http://localhost:5000/api/todos/${id}`,
                {
                    completed: !todoToUpdate.completed,
                }
            );
            setTodos((prev) =>
                prev.map((t) => (t.id === id ? response.data : t))
            );
        } catch (error) {
            console.error("Error toggling todo:", error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/todos/${id}`);
            setTodos((prev) => prev.filter((t) => t.id !== id));
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm onAddTodo={addTodo} />
            <TodoList
                todos={todos}
                onToggleTodo={toggleTodo}
                onDeleteTodo={deleteTodo}
            />
        </div>
    );
}

export default App;
