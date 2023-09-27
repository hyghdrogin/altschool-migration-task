const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	const Item = sequelize.define("Item", {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		size: {
			type: DataTypes.STRING,
			allowNull: false
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false
		}
	});

	Item.associate = (models) => {
		Item.belongsTo(models.Category, { foreignKey: "categoryId" });
		Item.belongsToMany(models.Order, {
			through: "OrderItem",
			foreignKey: "itemId",
			as: "orders"
		});
	};

	return Item;
};
