"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("stories", [
      {
        name: "Marian buys wine",
        content:
          "There is a cool bar in amsterdam, where good wine is to find!",
        imageUrl: null,
        spaceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Luiz loves tripel beer",
        content: "In Brugge there is a wonderful beer pipe line",
        imageUrl: null,
        spaceId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Marian plays football",
        content: "Football is a good way to make Brazilian friends",
        imageUrl: null,
        spaceId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Luiz cooks for friends",
        content: "I like to invite friends to taste my eggplant lasagna",
        imageUrl: null,
        spaceId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Luiz plays footbal",
        content: "In Brugge there is a wonderful beer pipe line",
        imageUrl: null,
        spaceId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
