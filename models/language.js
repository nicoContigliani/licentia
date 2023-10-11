'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Language.belongsToMany(models.Module, { through: models.ModuleLanguage });
    }
  }
  Language.init({
    language: DataTypes.STRING,
    acronyms: DataTypes.STRING,
    language_Allowed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Language',
  });
  return Language;
};