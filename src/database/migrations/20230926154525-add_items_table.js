"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Items", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			size: {
				type: Sequelize.ENUM("small", "medium", "large"),
				allowNull: false
			},
			price: {
				type: Sequelize.FLOAT,
				allowNull: false
			},
			categoryId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "Categories",
					key: "id"
				}
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Items");
	}
};
