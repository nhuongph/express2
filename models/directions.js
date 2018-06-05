'use strict';
module.exports = (sequelize, DataTypes) => {
  var Directions = sequelize.define('Directions', {
    code: DataTypes.STRING,
    name: {
      type: DataTypes.STRING,
      validate: {
        max: 50
      }
    }
  }, {});
  Directions.associate = function(models) {
    // associations can be defined here
  };
  return Directions;
};