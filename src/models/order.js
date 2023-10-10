const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
	status: { 
		type: String,
		maxLength: 100
	},
	price: {
		type: Number,
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	itemId: {
		type: Schema.Types.ObjectId,
		ref: "Item",
	}
}, {
	timestamps: true
}
);

module.exports = model("Order", orderSchema);