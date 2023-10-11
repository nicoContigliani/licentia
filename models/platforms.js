'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Platforms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Platforms.belongsToMany(models.Module, { through: models.ModulePlatforms });

    }
  }
  Platforms.init({
    platforms: DataTypes.STRING,
    modulePlatforms_Allowed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Platforms',
  });
  return Platforms;
};