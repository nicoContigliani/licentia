'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class All extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      All.belongsToMany(models.Licence, { through: models.LicenceAll });

      All.belongsTo(models.AllType, {
        foreignKey: 'AllTypeID',
      });
    }
  }
  All.init({
    Enterprise_Name: DataTypes.STRING,
    Branch_Name: DataTypes.STRING,
    User_Name: DataTypes.STRING,
    password: DataTypes.STRING,
    status_All: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    AllTypeID: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'All',
  });
  return All;
};