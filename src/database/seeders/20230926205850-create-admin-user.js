"use strict";

const bcrypt = require("bcrypt");
require("dotenv").config();

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
		const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);  // Replace with the desired password

		return queryInterface.bulkInsert("Users", [{
			firstName: "Daniel",
			lastName: "Adesoji",
			email: "daniel@altschool.com",
			password: hashedPassword,
			role: "admin",
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
		return queryInterface.bulkDelete("Users", null, {});
	}
};
