import api from "../config.js";
import { expect, use } from "chai";
import chaiJsonSchema from "chai-json-schema-ajv";
import {
  referensiAllSchema,
  referensiByParamsSchema,
} from "../schemas/referensi.js";

use(chaiJsonSchema);

describe("Test Cases for Job Role", () => {
  it("should get all job roles with required params", async () => {
    const res = await api
      .get("/referensi/jobrole")
      .query({ page: 1, size: 10 });
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(referensiAllSchema);
  });
  it("should get job role by id", async () => {
    const res = await api.get("/referensi/jobrole/byid/3");
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(referensiByParamsSchema);
  });
  it("should get job role by name", async () => {
    const res = await api.get("/referensi/jobrole/developer");
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(referensiByParamsSchema);
  });
  it("should create new job role", async () => {
    const reqBody = {
      name: "Wordpress Developer",
    };
    const res = await api.post("/referensi/jobrole").send(reqBody);
    expect(res.status).to.eql(200);
    expect(res.body.data.name).to.eql(reqBody.name);
  });
  it("should update job role by id", async () => {
    const reqBody = {
      id: 61,
      name: "Wordpress Developer 2",
      htag: 255,
    };
    const res = await api.put("/referensi/jobrole").send(reqBody);
    expect(res.status).to.eql(200);
    expect(res.body.data.name).to.eql(reqBody.name);
  });
  it.skip("should delete job role by id", async () => {
    const res = await api.delete("/referensi/jobrole/61");
    expect(res.status).to.eql(200);
    expect(res.body.data).to.eql("true");
  });
});
