'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Licence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Licence.belongsToMany(models.All, { through: models.LicenceAll });
      Licence.belongsToMany(models.Module, { through: models.LicenceModule });
      Licence.belongsToMany(models.Pay, { through: models.LicencePay });
      Licence.belongsToMany(models.BillingPlan, { through: models.BillingPlanLicence });
      Licence.belongsToMany(models.Support, { through: models.LicenceSupport });

      Licence.belongsTo(models.LicenceType, {
        foreignKey: 'LicenceTypeID',
      });
    }
  }
  Licence.init({
    Licence_Name: DataTypes.STRING,
    Start_Date: DataTypes.DATE,
    End_Date: DataTypes.DATE,
    Licence_TypeID: DataTypes.BIGINT,
    Billing_Plan_LicenceID: DataTypes.BIGINT,
    licenceJWT: DataTypes.STRING,
    LicenceTypeID: DataTypes.BIGINT,
    Licence_Allowed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Licence',
  });
  return Licence;
};