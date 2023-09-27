const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.JWT_KEY;

const generateToken = async(payload) => {
	const token = await jwt.sign(payload, secret, { expiresIn: "1h" });
	return token;
};

module.exports = {
	generateToken
};