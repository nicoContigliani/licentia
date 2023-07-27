'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LicenceSupport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LicenceSupport.init({
    LicenceId: DataTypes.BIGINT,
    SupportId: DataTypes.BIGINT,
    LicenceSupportJwt: DataTypes.STRING,
    LicenceSupport_Allowed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'LicenceSupport',
  });
  return LicenceSupport;
};