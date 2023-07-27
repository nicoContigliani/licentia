'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Support extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Support.belongsToMany(models.Licence, { through: models.LicenceSupport });
      Support.belongsTo(models.SupportType, {
        foreignKey: 'Support_TypeID',
      });
    }
  }
  Support.init({
    Type_Name: DataTypes.STRING,
    Description: DataTypes.STRING,
    Support_TypeID: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Support',
  });
  return Support;
};

