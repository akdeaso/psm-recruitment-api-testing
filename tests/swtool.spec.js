import api from "../config.js";
import { expect, use } from "chai";
import chaiJsonSchema from "chai-json-schema-ajv";
import { allSchema, byParamsSchema } from "../schemas/schemas.js";

use(chaiJsonSchema);

describe("Test Cases for Software Tool", () => {
  it("should get all software tools with required params", async () => {
    const res = await api.get("/swtool").query({ page: 1, size: 10 });
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(allSchema);
  });
  it("should get software tool by id", async () => {
    const res = await api.get("/swtool/byid/3");
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(byParamsSchema);
  });
  it("should get software tool by name", async () => {
    const res = await api.get("/swtool/java");
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(byParamsSchema);
  });
});
