'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ModuleLanguage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ModuleLanguage.init({
    LanguageId: DataTypes.BIGINT,
    ModuleId: DataTypes.BIGINT,
    moduleLanguage_Allowed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ModuleLanguage',
  });
  return ModuleLanguage;
};