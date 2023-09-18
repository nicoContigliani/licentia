'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LicenceType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LicenceType.init({
    Type_Name: DataTypes.STRING,
    Description: DataTypes.STRING,
    Max_Duration: DataTypes.BIGINT,
    Premium_Support: DataTypes.BOOLEAN,
    Users_Included: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'LicenceType',
  });
  return LicenceType;
};
