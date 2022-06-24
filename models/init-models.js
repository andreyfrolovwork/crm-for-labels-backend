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

  tracks.belongsTo(acts, { as: "fk_id_act_act", foreignKey: "fk_id_act"});
  acts.hasMany(tracks, { as: "tracks", foreignKey: "fk_id_act"});
  videoclips.belongsTo(acts, { as: "fk_id_act_act", foreignKey: "fk_id_act"});
  acts.hasMany(videoclips, { as: "videoclips", foreignKey: "fk_id_act"});
  tracks.belongsTo(albums, { as: "fk_id_album_album", foreignKey: "fk_id_album"});
  albums.hasMany(tracks, { as: "tracks", foreignKey: "fk_id_album"});
  videoclips.belongsTo(albums, { as: "fk_id_album_album", foreignKey: "fk_id_album"});
  albums.hasMany(videoclips, { as: "videoclips", foreignKey: "fk_id_album"});
  acts.belongsTo(artists, { as: "fk_id_artist_contract_artist", foreignKey: "fk_id_artist_contract"});
  artists.hasMany(acts, { as: "acts", foreignKey: "fk_id_artist_contract"});
  albums.belongsTo(artists, { as: "fk_id_artist_artist", foreignKey: "fk_id_artist"});
  artists.hasMany(albums, { as: "albums", foreignKey: "fk_id_artist"});
  releases.belongsTo(artists, { as: "fk_id_artist_artist", foreignKey: "fk_id_artist"});
  artists.hasMany(releases, { as: "releases", foreignKey: "fk_id_artist"});
  tracks.belongsTo(artists, { as: "fk_id_artist_artist", foreignKey: "fk_id_artist"});
  artists.hasMany(tracks, { as: "tracks", foreignKey: "fk_id_artist"});
  videoclips.belongsTo(artists, { as: "fk_id_artist_artist", foreignKey: "fk_id_artist"});
  artists.hasMany(videoclips, { as: "videoclips", foreignKey: "fk_id_artist"});
  tracks.belongsTo(releases, { as: "fk_id_release_release", foreignKey: "fk_id_release"});
  releases.hasMany(tracks, { as: "tracks", foreignKey: "fk_id_release"});
  videoclips.belongsTo(releases, { as: "fk_id_release_release", foreignKey: "fk_id_release"});
  releases.hasMany(videoclips, { as: "videoclips", foreignKey: "fk_id_release"});
  videoclips.belongsTo(tracks, { as: "fk_id_track_track", foreignKey: "fk_id_track"});
  tracks.hasMany(videoclips, { as: "videoclips", foreignKey: "fk_id_track"});
  acts.belongsTo(users, { as: "fk_id_user_user", foreignKey: "fk_id_user"});
  users.hasMany(acts, { as: "acts", foreignKey: "fk_id_user"});
  albums.belongsTo(users, { as: "fk_id_user_user", foreignKey: "fk_id_user"});
  users.hasMany(albums, { as: "albums", foreignKey: "fk_id_user"});
  artists.belongsTo(users, { as: "fk_id_user_user", foreignKey: "fk_id_user"});
  users.hasMany(artists, { as: "artists", foreignKey: "fk_id_user"});
  releases.belongsTo(users, { as: "fk_id_user_user", foreignKey: "fk_id_user"});
  users.hasMany(releases, { as: "releases", foreignKey: "fk_id_user"});
  tokens.belongsTo(users, { as: "fk_user", foreignKey: "fk_user_id"});
  users.hasMany(tokens, { as: "tokens", foreignKey: "fk_user_id"});
  videoclips.belongsTo(users, { as: "fk_id_user_user", foreignKey: "fk_id_user"});
  users.hasMany(videoclips, { as: "videoclips", foreignKey: "fk_id_user"});

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
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
