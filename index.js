const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

app.use(express.json());

// Basic route for the root URL
app.get("/", (req, res) => {
	res.send("Welcome to my Express app!");
});

app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log("Server is running on port ${PORT}");
});
