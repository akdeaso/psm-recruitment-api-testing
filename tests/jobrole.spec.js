import api from "../config.js";
import { expect, use } from "chai";
import chaiJsonSchema from "chai-json-schema-ajv";
import { allSchema, byParamsSchema } from "../schemas/schemas.js";

use(chaiJsonSchema);

describe("Test Cases for Job Role", () => {
  it("should get all job roles with required params", async () => {
    const res = await api.get("/jobrole").query({ page: 1, size: 10 });
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(allSchema);
  });
  it("should get job role by id", async () => {
    const res = await api.get("/jobrole/byid/3");
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(byParamsSchema);
  });
  it("should get job role by name", async () => {
    const res = await api.get("/jobrole/developer");
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(byParamsSchema);
  });
});
