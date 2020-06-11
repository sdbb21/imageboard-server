"use strict";
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define(
    "image",
    {
      title: DataTypes.STRING,
      url: DataTypes.STRING,
    },
    {}
  );
  image.associate = function (models) {
    image.belongsTo(models.user);
  };
  return image;
};
