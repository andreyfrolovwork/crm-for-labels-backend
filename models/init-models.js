const DataTypes = require("sequelize").DataTypes;
const _artists = require("./artists");
const _tokens = require("./tokens");
const _users = require("./users");

function initModels(sequelize) {
  const artists = _artists(sequelize, DataTypes);
  const tokens = _tokens(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  artists.belongsTo(users, { as: "fk_id_user_user", foreignKey: "fk_id_user"});
  users.hasMany(artists, { as: "artists", foreignKey: "fk_id_user"});
  tokens.belongsTo(users, { as: "fk_user", foreignKey: "fk_user_id"});
  users.hasMany(tokens, { as: "tokens", foreignKey: "fk_user_id"});

  return {
    artists,
    tokens,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
