import api from "../config.js";
import { expect, use } from "chai";
import chaiJsonSchema from "chai-json-schema-ajv";
import { allJobRoleSchema } from "../schemas/jobroles.js";

use(chaiJsonSchema);

describe("Test Cases for Job Role", () => {
  it("should get all job roles with required params", async () => {
    const res = await api.get("/jobrole").query({ page: 1, size: 10, q: "" });
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(allJobRoleSchema);
  });
});
