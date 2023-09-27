const models = require("../models/index.js");

const fetchItems = async (req, res) => {
	try {
		const items = await models.Item.findAll();
		if (!items || items.length < 1) {
			return res.status(404).send({
				status: false,
				message: "Items not found"
			});
		}
		return res.status(200).send({
			status: true,
			message: "Items fetched successfully",
			data: items
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
	fetchItems
};