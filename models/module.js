'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Module extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Module.belongsToMany(models.Licence, { through: models.LicenceModule });
      Module.belongsToMany(models.Platforms, { through: models.ModulePlatforms });
      Module.belongsToMany(models.Language, { through: models.ModuleLanguage });
      Module.belongsToMany(models.BillingPlan, { through: models.ModulePlan });

      Module.belongsTo(models.ModuleType, {
        foreignKey: 'Module_TypeID',
      });
    }
  }
  Module.init({
    Module_Name: DataTypes.STRING,
    Module_Description: DataTypes.STRING,
    Module_TypeID: DataTypes.BIGINT,
    Module_Allowed: DataTypes.BOOLEAN,
    Module_Free: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Module',
  });
  return Module;
};