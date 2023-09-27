"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Orders", {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			status: {
				type: Sequelize.STRING,
				allowNull: false
			},
			price: {
				type: Sequelize.FLOAT,
				allowNull: false
			},
			userId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "Users",
					key: "id"
				}
			},
			itemId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "Items",
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
		await queryInterface.dropTable("Orders");
	}
};
