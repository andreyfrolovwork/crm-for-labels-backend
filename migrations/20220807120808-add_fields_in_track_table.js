"use strict";

const { DataTypes } = require("sequelize");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("tracks", "code_po_release_album", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("tracks", "release_name", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("tracks", "release_version", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("tracks", "release_date", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("tracks", "sell_start_date", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("tracks", "release_type", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.renameColumn("tracks", "performers", "performer");
    await queryInterface.addColumn("tracks", "copyright_holder", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("tracks", "genre", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("tracks", "disk_number", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("tracks", "track_number", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("tracks", "track_version_subtitle", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("tracks", "copyright_owner", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("tracks", "copyright_owner_rate", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("tracks", "owner_of_related_rights", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("tracks", "owner_of_related_rights_rate", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("tracks", "hide_track", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("tracks", "meta_data", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("tracks", "explicit_18", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("tracks", "track_performer", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.renameColumn("tracks", "share_of_related_rights", "territory_of_rights");
    await queryInterface.renameColumn("tracks", "name", "track_name");
    await queryInterface.addColumn("tracks", "copyright_organisation", {
      type: DataTypes.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("tracks", "code_po_release_album", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.removeColumn("tracks", "release_name", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.removeColumn("tracks", "release_version", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.removeColumn("tracks", "release_date", {
      type: DataTypes.DATE,
      allowNull: true,
    });
    await queryInterface.removeColumn("tracks", "sell_start_date", {
      type: DataTypes.DATE,
      allowNull: true,
    });
    await queryInterface.removeColumn("tracks", "release_type", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.renameColumn("tracks", "performer", "performers");
    await queryInterface.removeColumn("tracks", "copyright_holder", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.removeColumn("tracks", "genre", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.removeColumn("tracks", "disk_number", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.removeColumn("tracks", "track_number", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.removeColumn("tracks", "track_version_subtitle", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.removeColumn("tracks", "copyright_owner", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.removeColumn("tracks", "copyright_owner_rate", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.removeColumn("tracks", "owner_of_related_rights", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.removeColumn("tracks", "owner_of_related_rights_rate", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.removeColumn("tracks", "hide_track", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.removeColumn("tracks", "meta_data", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.removeColumn("tracks", "explicit_18", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.removeColumn("tracks", "track_performer", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.renameColumn("tracks", "territory_of_rights", "share_of_related_rights");
    await queryInterface.renameColumn("tracks", "track_name", "name");
    await queryInterface.removeColumn("tracks", "copyright_organisation", {
      type: DataTypes.STRING,
      allowNull: true,
    });
  },
};
