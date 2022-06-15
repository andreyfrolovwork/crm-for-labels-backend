const sql = require("../libs/postgres.js");
const ApiError = require("../exceptions/ApiError.js");
const User = require("./../models/User.js");
const Artist = require("./../models/Artist.js");

class AdminClass {
  async getArtists(req, res, next) {
    try {
      const users = await Artist.getAll();
      res.json(users);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async putArtist(req, res, next) {
    try {
      const user = new Artist({
        ...req.body,
      });
      const newArtist = await user.save();
      if (newArtist.count === 1) {
        res.json("good");
      } else {
        throw ApiError.DatabaseError(
          "Ошибка при взаимодействии с базой данных"
        );
      }
      debugger;
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async getUsers(req, res, next) {
    try {
      const users = await User.getAll();
      res.json(users);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async putUser(req, res, next) {
    try {
      const user = new User({ ...req.body });
      const newUsers = await user.save();
      if (newUsers.count === 1) {
        res.json("good");
      } else {
        throw ApiError.DatabaseError(
          "Ошибка при взаимодействии с базой данных"
        );
      }
      debugger;
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
}

module.exports = new AdminClass();
