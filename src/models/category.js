const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
	name: { 
		type: String,
		maxLength: 100,
		unique: true
	}
}, {
	timestamps: true
}
);

module.exports = model("Category", categorySchema);