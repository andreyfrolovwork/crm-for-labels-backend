const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return videoclips.init(sequelize, DataTypes);
}

class videoclips extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id_videoclip: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_id_track: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tracks',
        key: 'id_track'
      }
    },
    fk_id_album: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'albums',
        key: 'id_album'
      }
    },
    fk_id_release: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'releases',
        key: 'id_release'
      }
    },
    fk_id_act: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'acts',
        key: 'id_act'
      }
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
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    author_of_text: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    author_of_music: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phonogram_timing: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    director_screenwriter: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country_of_origin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    territory_video: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    age_category: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'videoclips',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "videoclips_pkey",
        unique: true,
        fields: [
          { name: "id_videoclip" },
        ]
      },
    ]
  });
  }
}
