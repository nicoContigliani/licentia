'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LicenceAll extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LicenceAll.init({
    LicenceId: DataTypes.BIGINT,
    AllId: DataTypes.BIGINT,
    LicenceAllJwt: DataTypes.STRING,
    LicenceAll_Allowed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'LicenceAll',
  });
  return LicenceAll;
};