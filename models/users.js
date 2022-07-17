<<<<<<< HEAD
const Sequelize = require('sequelize');
=======
<<<<<<< HEAD
=======
// noinspection JSUnresolvedFunction,JSUnresolvedVariable

>>>>>>> 380db967db1bb68aa4a787f2f12600e87b034e33
const Sequelize = require("sequelize");
>>>>>>> 48a56f9dd03e662447d2ac6bd666c3978c66f8f4
module.exports = (sequelize, DataTypes) => {
  return users.init(sequelize, DataTypes);
}

class users extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_user: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    role: {
      type: DataTypes.ENUM("admin","admin_not_activated","artist"),
      allowNull: true,
      defaultValue: "artist"
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "id_user" },
        ]
      },
    ]
  });
  }
}
