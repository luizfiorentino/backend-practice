"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("spaces", "userId", {
      //title: { type: DataTypes.STRING, allowNull: false },
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("stories", "spaceId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "spaces",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("spaces", "userId");
    await queryInterface.removeColumn("stories", "spaceId");
  },
};
