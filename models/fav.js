'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fav extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Super, {
        foreignKey: 'superId'
      });
      this.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId'
      });
    }
  }
  Fav.init({
    superId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Fav',
  });
  return Fav;
};