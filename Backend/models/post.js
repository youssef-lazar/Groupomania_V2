'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.associate = (models) => {
        Post.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          },
          onDelete: 'CASCADE'
        })
        Post.hasMany(models.Like)
        Post.hasMany(models.Comment)
      }
    }
  };
  Post.init({
    idUser: DataTypes.INTEGER,
    content: DataTypes.STRING,
    attachment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};