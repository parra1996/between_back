'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Super extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Super.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    imagen: DataTypes.STRING,
    extension: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Super',
  });
  return Super;
};