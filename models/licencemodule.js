'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LicenceModule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LicenceModule.init({
    LicenceId: DataTypes.BIGINT,
    ModuleId: DataTypes.BIGINT,
    licenceModuleJwt: DataTypes.STRING,
    licenceModule_Allowed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'LicenceModule',
  });
  return LicenceModule;
};