const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return acts.init(sequelize, DataTypes);
}

class acts extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_act: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id_user'
      }
    },
    fk_id_artist_contract: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'artists',
        key: 'id_artist_contract'
      }
    }
  }, {
    sequelize,
    tableName: 'acts',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "acts_pkey",
        unique: true,
        fields: [
          { name: "id_act" },
        ]
      },
    ]
  });
  }
}
