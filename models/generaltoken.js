'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GeneralToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GeneralToken.init({
    LicenceId: DataTypes.BIGINT,
    Token_Value: DataTypes.STRING,
    Expiration_Date: DataTypes.DATE,
    Revoked: DataTypes.BOOLEAN,
    Revoked_At: DataTypes.DATE,
    IP_Address: DataTypes.STRING,
    customer: DataTypes.STRING,
    messages: DataTypes.STRING,
    alerts: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GeneralToken',
  });
  return GeneralToken;
};

