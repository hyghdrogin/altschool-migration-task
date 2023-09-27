const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	const Order = sequelize.define("Order", {
		status: {
			type: DataTypes.STRING,
			allowNull: false
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false
		}
	});

	Order.associate = (models) => {
		Order.belongsTo(models.User, { foreignKey: "userId" });
		Order.belongsToMany(models.Item, {
			through: "OrderItem",
			foreignKey: "orderId",
			as: "items"
		});
	};

	return Order;
};
