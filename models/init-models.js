const DataTypes = require("sequelize").DataTypes;
const _SequelizeMeta = require("./SequelizeMeta");
const _acts = require("./acts");
const _albums = require("./albums");
const _artists = require("./artists");
const _releases = require("./releases");
const _tokens = require("./tokens");
const _tracks = require("./tracks");
const _users = require("./users");
const _videoclips = require("./videoclips");
const _track_owners = require("./track_owners.js");

function initModels(sequelize) {
  const SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  const acts = _acts(sequelize, DataTypes);
  const albums = _albums(sequelize, DataTypes);
  const artists = _artists(sequelize, DataTypes);
  const releases = _releases(sequelize, DataTypes);
  const tokens = _tokens(sequelize, DataTypes);
  const tracks = _tracks(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);
  const videoclips = _videoclips(sequelize, DataTypes);
  const track_owners = _track_owners(sequelize, DataTypes);

  acts.belongsTo(users, {
    as: "fk_id_user_user",
    foreignKey: "fk_id_user",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  videoclips.belongsTo(users, {
    as: "fk_id_user_user",
    foreignKey: "fk_id_user",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  albums.belongsTo(users, {
    as: "fk_id_user_user",
    foreignKey: "fk_id_user",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  releases.belongsTo(users, {
    as: "fk_id_user_user",
    foreignKey: "fk_id_user",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });

  tokens.belongsTo(users, {
    as: "fk_user",
    foreignKey: "fk_user_id",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  artists.belongsTo(users, {
    as: "fk_id_user_user",
    foreignKey: "fk_id_user",
    onUpdate: "RESTRICT",
    onDelete: "SET NULL",
  });

  artists.hasMany(acts, {
    as: "acts",
    foreignKey: "fk_id_artist_contract",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  artists.hasMany(albums, {
    as: "albums",
    foreignKey: "fk_id_artist_contract",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  artists.hasMany(releases, {
    as: "releases",
    foreignKey: "fk_id_artist_contract",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  artists.hasMany(tracks, {
    as: "tracks",
    foreignKey: "fk_id_artist_contract",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  artists.hasMany(videoclips, {
    as: "videoclips",
    foreignKey: "fk_id_artist_contract",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });

  users.hasMany(acts, {
    as: "acts",
    foreignKey: "fk_id_user",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  users.hasMany(artists, {
    as: "artists",
    foreignKey: "fk_id_user",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  users.hasMany(albums, {
    as: "albums",
    foreignKey: "fk_id_user",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });

  users.hasMany(releases, {
    as: "releases",
    foreignKey: "fk_id_user",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  users.hasOne(tokens, {
    as: "token",
    foreignKey: "fk_user_id",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  users.hasMany(videoclips, {
    as: "videoclips",
    foreignKey: "fk_id_user",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });

  tracks.belongsTo(acts, {
    as: "fk_id_act_act",
    foreignKey: "fk_id_act",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  tracks.belongsTo(albums, {
    as: "fk_id_album_album",
    foreignKey: "fk_id_album",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });

  acts.hasMany(tracks, {
    as: "tracks",
    foreignKey: "fk_id_act",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  acts.hasMany(videoclips, {
    as: "videoclips",
    foreignKey: "fk_id_act",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  acts.belongsTo(artists, {
    as: "fk_id_artist_contract_artist",
    foreignKey: "fk_id_artist_contract",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });

  albums.hasMany(tracks, {
    as: "tracks",
    foreignKey: "fk_id_album",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });

  videoclips.belongsTo(albums, {
    as: "fk_id_album_album",
    foreignKey: "fk_id_album",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  videoclips.belongsTo(acts, {
    as: "fk_id_act_act",
    foreignKey: "fk_id_act",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });

  albums.hasMany(videoclips, {
    as: "videoclips",
    foreignKey: "fk_id_album",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  albums.belongsTo(artists, {
    as: "fk_id_artist_contract_artist",
    foreignKey: "fk_id_artist_contract",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });

  releases.belongsTo(artists, {
    as: "fk_id_artist_contract_artist",
    foreignKey: "fk_id_artist_contract",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });

  tracks.belongsTo(artists, {
    as: "fk_id_artist_contract_artist",
    foreignKey: "fk_id_artist_contract",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  tracks.belongsTo(releases, {
    as: "fk_id_release_release",
    foreignKey: "fk_id_release",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });

  videoclips.belongsTo(artists, {
    as: "fk_id_artist_contract_artist",
    foreignKey: "fk_id_artist_contract",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  videoclips.belongsTo(releases, {
    as: "fk_id_release_release",
    foreignKey: "fk_id_release",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  videoclips.belongsTo(tracks, {
    as: "fk_id_track_track",
    foreignKey: "fk_id_track",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });

  releases.hasMany(tracks, {
    as: "tracks",
    foreignKey: "fk_id_release",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });
  releases.hasMany(videoclips, {
    as: "videoclips",
    foreignKey: "fk_id_release",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });

  tracks.hasMany(videoclips, {
    as: "videoclips",
    foreignKey: "fk_id_track",
    onUpdate: "NO ACTION",
    onDelete: "SET NULL",
  });

  track_owners.belongsTo(artists, {
    as: "fk_id_artist_contract_artist",
    foreignKey: "fk_id_artist_contract",
  });
  artists.hasMany(track_owners, {
    as: "track_owners",
    foreignKey: "fk_id_artist_contract",
  });

  track_owners.belongsTo(tracks, {
    as: "fk_id_track_track",
    foreignKey: "fk_id_track",
  });
  tracks.hasMany(track_owners, {
    as: "track_owners",
    foreignKey: "fk_id_track",
  });

  return {
    SequelizeMeta,
    acts,
    albums,
    artists,
    releases,
    tokens,
    tracks,
    users,
    videoclips,
    track_owners,
  };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
