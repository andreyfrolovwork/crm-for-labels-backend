module.exports = class UserDto {
  email;
  id_user;

  constructor(model) {
    this.email = model.email;
    this.id_user = model.id_user;
  }
};
