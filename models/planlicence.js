'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlanLicence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PlanLicence.init({
    LicenceID: DataTypes.BIGINT,
    BillingPlanLicenceID: DataTypes.BIGINT,
    PlanLicenceJwt: DataTypes.STRING,
    PlanLicence_Allowed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'PlanLicence',
  });
  return PlanLicence;
};
