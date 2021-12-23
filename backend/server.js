const express = require("express");
const cors = require("cors");
const app = express();

const todosRoute = require("./routes/todos");

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/todos", todosRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
