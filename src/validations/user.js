const Joi = require("joi");

const options = {
	stripUnknown: true,
	abortEarly: false,
	errors: {
		wrap: {
			label: ""
		}
	}
};

const validateRegisterUser = (registerUser) => {
	const data = Joi.object({
		firstName: Joi.string().min(4).max(50).required(),
		lastName: Joi.string().min(4).max(50).required(),
		email: Joi.string().email().min(4).max(50).required(),
		password: Joi.string().min(4).required(),
	});
	return data.validate(registerUser, options);
};

const validateUserLogin = (userLogin) => {
	const data = Joi.object({
		email: Joi.string().email().min(4).max(50),
		password: Joi.string().min(4).required()
	});
	return data.validate(userLogin, options);
};

module.exports = {
	validateRegisterUser, validateUserLogin
};