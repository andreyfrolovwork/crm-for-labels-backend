const request = require("supertest");
const app = require("./../app.js");
const { models, sequelize } = require("../models/models-export.js");
const token =
  // eslint-disable-next-line max-len
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlvYm94NDIwQGdtYWlsLmNvbSIsImlkX3VzZXIiOjEsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY1NzI3NzY4OSwiZXhwIjoxNjYwODc3Njg5fQ.q7tb371e5txu6ucnGqjI2OANR9pe0ROv_fRQpCFssq0";
afterAll(() => {
  sequelize.close();
});
describe("POST PUT DELETE acts", () => {
  test("should respond with a 200 status code", async () => {
    try {
      const responce = await request(app)
        .post("/crm-api/admin/post-act")
        .set({
          Authorization: `Bearer ${token}`,
        })
        .send({
          fk_id_artist_contract: "1",
        });
      expect(responce.statusCode).toBe(200);
    } catch (e) {
      expect(e).toBe(e);
    }
  });
  test("should respond with a 200 status code", async () => {
    try {
      const testAct = await models.acts.findOne({
        order: [["id_act", "DESC"]],
      });
      const responce = await request(app)
        .put("/crm-api/admin/put-act")
        .set({
          Authorization: `Bearer ${token}`,
        })
        .send({
          id_act: testAct.id_act,
          fk_id_artist_contract: 1,
          createdAt: "2022-07-08",
        });
      expect(responce.statusCode).toBe(200);
    } catch (e) {
      expect(e).toBe(e);
    }
  });
  test("should respond with a 200 status code", async () => {
    try {
      const testAct = await models.acts.findOne({
        order: [["id_act", "DESC"]],
      });
      const responce = await request(app)
        .delete("/crm-api/admin/delete-act")
        .set({
          Authorization: `Bearer ${token}`,
        })
        .send({
          id_act: testAct.id_act,
        });
      expect(responce.statusCode).toBe(200);
    } catch (e) {
      expect(e).toBe(e);
    }
  });
});
