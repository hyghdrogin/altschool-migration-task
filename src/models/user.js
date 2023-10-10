const { Schema, model }= require("mongoose");

const userSchema = new Schema({
	firstName: {
		type: String,
		maxLength: 100
	},
	lastName: {
		type: String,
		maxLength: 100
	},
	email: {
		type: String,
		lowercase: true,
		unique: true
	},
	password: {
		type: String,
	},
	role: {
		type: String,
		enum: ["user", "admin"],
		default: "user"
	}
}, {
	timestamps: true
}
);

module.exports = model("User", userSchema);