'use strict';
module.exports = (sequelize, DataTypes) => {
  const Businesses = sequelize.define('Businesses', {
    business_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Businesses.associate = function(models) {
    // associations can be defined here
  };
  return Businesses;
};