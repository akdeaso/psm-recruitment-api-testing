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
  it("should create new software tool", async () => {
    const reqBody = {
      name: "RSpec",
    };
    const res = await api.post("/swtool").send(reqBody);
    expect(res.status).to.eql(200);
    expect(res.body.data.name).to.eql(reqBody.name);
  });
  it("should update software tool by id", async () => {
    const reqBody = {
      id: 204,
      name: "Harusnya Keupdate",
      htag: 256,
    };
    const res = await api.put("/swtool").send(reqBody);
    expect(res.status).to.eql(200);
    expect(res.body.data.name).to.eql(reqBody.name);
  });
  it("should delete software tool by id", async () => {
    const res = await api.delete("/swtool/206");
    expect(res.status).to.eql(200);
    expect(res.body.data).to.eql("true");
  });
});
