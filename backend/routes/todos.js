const express = require("express");
const router = express.Router();

// In-memory data store (for demo purposes)
let todos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn Express", completed: false },
];

router.get("/", (req, res) => {
    res.json(todos);
});

router.post("/", (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: "Text is required" });
    }
    const newTodo = {
        id: Date.now(),
        text,
        completed: false,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

router.put("/:id", (req, res) => {
    const todoId = parseInt(req.params.id, 10);
    const { text, completed } = req.body;

    const todoIndex = todos.findIndex((t) => t.id === todoId);
    if (todoIndex === -1) {
        return res.status(404).json({ error: "Todo not found" });
    }

    // Update fields if they exist in the request body
    if (typeof text !== "undefined") {
        todos[todoIndex].text = text;
    }
    if (typeof completed !== "undefined") {
        todos[todoIndex].completed = completed;
    }

    res.json(todos[todoIndex]);
});

router.delete("/:id", (req, res) => {
    const todoId = parseInt(req.params.id, 10);
    const todoIndex = todos.findIndex((t) => t.id === todoId);

    if (todoIndex === -1) {
        return res.status(404).json({ error: "Todo not found" });
    }

    const removedTodo = todos.splice(todoIndex, 1);
    res.json(removedTodo[0]);
});

module.exports = router;
