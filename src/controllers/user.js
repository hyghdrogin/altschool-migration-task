const { validateRegisterUser, validateUserLogin } = require("../validation/user.js");
const bcrypt = require("bcrypt");
const models = require("../models/index.js");
const { generateToken } = require("../utilities/jsonwebtoken.js");

const userRegistration = async (req, res) => {
	try {
		const { error, value } = validateRegisterUser(req.body);
		if(error) {
			return res.status(400).send({
				status: false,
				message: error.message
			});
		}
		const existingUser = await models.User.findOne({ where: { email: value.email } });
		if(existingUser) {
			return res.status(409).send({
				status: false,
				message: "User already exist"
			});
		}
		const hashedPassword = await bcrypt.hash(value.password, 10);
		const registeredUser = await models.User.create({
			firstName: value.firstName, lastName: value.lastName,
			email: value.email, password: hashedPassword
		});
		const userDetails = {
			id: registeredUser.id,
			firstName: registeredUser.firstName,
			lastName: registeredUser.lastName,
			email: registeredUser.email
		};
		return res.status(201).send({
			status: true,
			message: "User registered successfully",
			data: userDetails
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send({
			status: false,
			message: "Internal server error"
		});
	}
};

const userLogin = async (req, res) => {
	try {
		const { error, value } = validateUserLogin(req.body);
		if(error) {
			return res.status(400).send({
				status: false,
				message: error.message
			});
		}
		const existingUser = await models.User.findOne({
			where: { email: value.email }
		});
		if(!existingUser) {
			return res.status(404).send({
				status: false,
				message: "Invalid email or password"
			});
		}
		const passwordCompare = await bcrypt.compare(value.password, existingUser.password);
		if(!passwordCompare) {
			return res.status(404).send({
				status: false,
				message: "Invalid email or password"
			});
		}
		const token = await generateToken({ id: existingUser.id, email: existingUser.email});
		const userDetails = existingUser.get();
		delete userDetails.password;
		return res.status(200).send({
			status: true,
			message: "User logged in",
			data: { userDetails, token }
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send({
			status: false,
			message: "Internal server error"
		});
	}
};

module.exports = {
	userRegistration, userLogin
};