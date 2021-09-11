"use strict";

const { Model } = require("sequelize");
const { v4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users);
      this.belongsTo(models.articles);
    }
  }
  comments.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: v4,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      parent: {
        type: DataTypes.UUID,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      timestamps: true,
      modelName: "comments",
    }
  );
  return comments;
};
