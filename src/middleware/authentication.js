const jwt = require("jsonwebtoken");
const models = require("../models/index.js");
require("dotenv").config();

const verifyToken = async (req, res, next) => {
	try {
		if (req.headers && req.headers.authorization) {
			const parts = req.headers.authorization.split(" ");
			if (parts.length === 2) {
				const scheme = parts[0];
				const credentials = parts[1];
				if (/^Bearer$/i.test(scheme)) {
					const token = credentials;
					const decoded = await jwt.verify(token, process.env.JWT_KEY);

					const user = await models.User.findOne({ where: { id: decoded.id } });
					if (!user) return res.status(404).send({
						status: false,
						message: "User account not found"
					});
					req.user = user;
					return next();
				}
			} else {
				return res.status(401).send({
					status: false,
					message: "Invalid authorization format"
				});
			}
		} else {
			return res.status(401).send({
				status: false,
				message: "Authorization not found"
			});
		}
	} catch (error) {
		return res.status(500).send({
			status: false,
			message: "Internal server error"
		});
	}
};

module.exports = {
	verifyToken
};