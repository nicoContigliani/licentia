'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ModulePlatforms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ModulePlatforms.init({
    PlatformsId: DataTypes.BIGINT,
    ModuleId: DataTypes.BIGINT,
    modulePlatforms_Allowed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ModulePlatforms',
  });
  return ModulePlatforms;
};