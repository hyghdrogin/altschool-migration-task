const express = require("express");
const cors = require("cors");
const db = require("./database/index");
const router = require("./routes/index.js");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/", router);

app.get("/", (req, res) => {
	res.status(200).send({
		status: true,
		message: "Welcome to API Homepage"
	});
});

app.use((req, res) => res.status(404).send({
	status: false,
	message: "Invalid route, kindly check"
}));

app.listen(port, async() => {
	await db.connect();
	console.info(`Server is running on port: ${port}`);
});