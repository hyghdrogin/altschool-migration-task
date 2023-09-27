const express = require("express");
const cors = require("cors");
const router = require("./routes/index.js");
require("dotenv").config();

const port = process.env.PORT ?? 5000;

const app = express();

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
	message: "Invalid Route, Kindly check"
}));

app.listen(port, () => {
	console.info(`Server running on port: ${port}`);
});