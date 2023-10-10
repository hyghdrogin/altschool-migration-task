const mongoose = require("mongoose");
require("dotenv/config");
const models = require("../models/index.js");
const category = require("./category");
const admin = require("./admin.js");
const items = require("./item.js");

const main = async() => {
	mongoose.set("strictQuery", false);
	mongoose.connect(process.env.DATABASE_URL);
	console.log("seeding started...");
	await models.Category.insertMany(category);
	await models.User.insertMany(admin); 
	await models.Item.insertMany(items); 
	console.log("seeding done...");
	await mongoose.connection.close();
};

main();