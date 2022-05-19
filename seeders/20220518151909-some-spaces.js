"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("spaces", [
      {
        title: "Marian's Space",
        description: "Let's go to the bar",
        backgroundColor: "#ffffff",
        color: "#000000",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Luiz's space",
        description: "Bier is good",
        backgroundColor: "#000000",
        color: "#ffffff",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Luiz's space",
        description: "Bier is good",
        backgroundColor: "#000000",
        color: "#ffffff",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
