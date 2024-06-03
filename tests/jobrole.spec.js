import api from "../config.js";
import { expect, use } from "chai";
import chaiJsonSchema from "chai-json-schema-ajv";
import {
  allJobRoleSchema,
  jobRoleByParamsSchema,
} from "../schemas/jobroles.js";

use(chaiJsonSchema);

describe("Test Cases for Job Role", () => {
  it("should get all job roles with required params", async () => {
    const res = await api.get("/jobrole").query({ page: 1, size: 10 });
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(allJobRoleSchema);
  });
  it("should get job role by id", async () => {
    const res = await api.get("/jobrole/byid/3");
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(jobRoleByParamsSchema);
  });
  it("should get job role by name", async () => {
    const res = await api.get("/jobrole/developer");
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(jobRoleByParamsSchema);
  });
});
