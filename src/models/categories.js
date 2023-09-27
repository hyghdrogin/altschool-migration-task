const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	const Category = sequelize.define("Category", {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});

	Category.associate = (models) => {
		Category.hasMany(models.Item, { foreignKey: "categoryId" });
	};

	return Category;
};
