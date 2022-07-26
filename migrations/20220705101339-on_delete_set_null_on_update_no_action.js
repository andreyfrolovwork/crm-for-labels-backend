"use strict";

const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface) {
    await queryInterface.changeColumn("tracks", "fk_id_album", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "albums",
        key: "id_album",
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.changeColumn("tracks", "fk_id_release", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "releases",
        key: "id_release",
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.changeColumn("tracks", "fk_id_album", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "albums",
        key: "id_album",
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.changeColumn("tracks", "fk_id_act", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "acts",
        key: "id_act",
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.changeColumn("tracks", "fk_id_artist_contract", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "artists",
        key: "id_artist_contract",
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.changeColumn("videoclips", "fk_id_track", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "tracks",
        key: "id_track",
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.changeColumn("videoclips", "fk_id_album", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "albums",
        key: "id_album",
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.changeColumn("videoclips", "fk_id_release", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "releases",
        key: "id_release",
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.changeColumn("videoclips", "fk_id_act", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "acts",
        key: "id_act",
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.changeColumn("videoclips", "fk_id_artist_contract", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "artists",
        key: "id_artist_contract",
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.changeColumn("videoclips", "fk_id_user", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "id_user",
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.changeColumn("albums", "fk_id_artist_contract", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "artists",
        key: "id_artist_contract",
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.changeColumn("albums", "fk_id_user", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "id_user",
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.changeColumn("releases", "fk_id_artist_contract", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "artists",
        key: "id_artist_contract",
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.changeColumn("acts", "fk_id_artist_contract", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "artists",
        key: "id_artist_contract",
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
    });

    await queryInterface.changeColumn("tracks", "fk_id_artist_contract", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "artists",
        key: "id_artist_contract",
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.changeColumn("videoclips", "fk_id_artist_contract", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "artists",
        key: "id_artist_contract",
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.changeColumn("albums", "fk_id_artist_contract", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "artists",
        key: "id_artist_contract",
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.changeColumn("releases", "fk_id_artist_contract", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "artists",
        key: "id_artist_contract",
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
    });
    await queryInterface.changeColumn("acts", "fk_id_artist_contract", {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "artists",
        key: "id_artist_contract",
        onUpdate: "NO ACTION",
        onDelete: "SET NULL",
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.changeColumn("tracks", "fk_id_album", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
    await queryInterface.changeColumn("tracks", "fk_id_release", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
    await queryInterface.changeColumn("tracks", "fk_id_album", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
    await queryInterface.changeColumn("tracks", "fk_id_act", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
    await queryInterface.changeColumn("tracks", "fk_id_artist_contract", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
    await queryInterface.changeColumn("videoclips", "fk_id_track", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
    await queryInterface.changeColumn("videoclips", "fk_id_album", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
    await queryInterface.changeColumn("videoclips", "fk_id_release", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
    await queryInterface.changeColumn("videoclips", "fk_id_act", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
    await queryInterface.changeColumn("videoclips", "fk_id_artist_contract", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
    await queryInterface.changeColumn("videoclips", "fk_id_user", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
    await queryInterface.changeColumn("albums", "fk_id_artist_contract", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
    await queryInterface.changeColumn("albums", "fk_id_user", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
    await queryInterface.changeColumn("releases", "fk_id_artist_contract", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
    await queryInterface.changeColumn("acts", "fk_id_artist_contract", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });

    await queryInterface.changeColumn("tracks", "fk_id_artist_contract", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
    await queryInterface.changeColumn("videoclips", "fk_id_artist_contract", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
    await queryInterface.changeColumn("albums", "fk_id_artist_contract", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
    await queryInterface.changeColumn("releases", "fk_id_artist_contract", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
    await queryInterface.changeColumn("acts", "fk_id_artist_contract", {
      type: DataTypes.INTEGER,
      allowNull: true,
    });
  },
};
