"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		/**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
		return queryInterface.bulkInsert("Items", [{
			name: "Burberry Shirt",
			size: "small",
			price: 12.5,
			categoryId: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: "Nike Joggers",
			size: "large",
			price: 15,
			categoryId: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: "Addidas Joggers",
			size: "medium",
			price: 10,
			categoryId: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: "Wall Clock",
			size: "large",
			price: 10,
			categoryId: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: "Microwave Oven",
			size: "small",
			price: 350,
			categoryId: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		},{
			name: "Iron",
			size: "small",
			price: 150,
			categoryId: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: "Ox Standing Fan",
			size: "medium",
			price: 85,
			categoryId: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: "Gold Bracelet",
			size: "medium",
			price: 50,
			categoryId: 3,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: "Gold Rings",
			size: "small",
			price: 50,
			categoryId: 3,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: "Diamond Necklace",
			size: "large",
			price: 1500,
			categoryId: 3,
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},

	async down (queryInterface, Sequelize) {
		/**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
		return queryInterface.bulkDelete("Items", null, {});
	}
};
