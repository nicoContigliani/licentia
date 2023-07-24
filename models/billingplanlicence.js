'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BillingPlanLicence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BillingPlanLicence.init({
    BillingPlanID: DataTypes.BIGINT,
    LicenceID: DataTypes.BIGINT,
    BillingPlanLicenceJwt: DataTypes.STRING,
    BillingPlanLicence_Allowed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'BillingPlanLicence',
  });
  return BillingPlanLicence;
};