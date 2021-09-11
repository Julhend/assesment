"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      parent: {
        type: Sequelize.UUID,
        defaultValue: 0,
      },
      articleId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "articles",
          key: "id",
        },
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("comments");
  },
};
