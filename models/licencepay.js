'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LicencePay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LicencePay.init({
    LicenceId: DataTypes.BIGINT,
    PayId: DataTypes.BIGINT,
    Payment_Date: DataTypes.DATE,
    LicencePayJwt: DataTypes.STRING,
    LicencePay_Allowed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'LicencePay',
  });
  return LicencePay;
};