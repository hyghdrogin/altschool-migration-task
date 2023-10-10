const { Schema, model }  = require("mongoose");

const itemSchema = new Schema({
	name: { 
		type: String,
		maxLength: 100
	},
	size: {
		type: String,
		maxLength: 100
	},
	price: {
		type: Number,
	},
	categoryId: {
		type: Schema.Types.ObjectId,
		ref: "Category",
	}
}, {
	timestamps: true
}
);

module.exports = model("Item", itemSchema);