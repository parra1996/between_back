'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Fav, {
        foreignKey: 'usuarioId'
      });
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    usuario: DataTypes.STRING,
    super_fav: DataTypes.STRING,
    favs: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};