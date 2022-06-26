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
      this.hasMany(models.Fav, {
        foreignKey: 'superId'
      });
    }
  }
  Super.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    imagen: DataTypes.STRING,
    extension: DataTypes.STRING,
    comics: DataTypes.STRING,
    n_comics: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Super',
  });
  return Super;
};