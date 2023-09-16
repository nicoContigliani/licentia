'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BillingPlanType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BillingPlanType.init({
    BillingPlanType_Name: DataTypes.STRING,
    BillingPlanType_Description: DataTypes.STRING,
    BillingPlan_type_ID: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'BillingPlanType',
  });
  return BillingPlanType;
};

