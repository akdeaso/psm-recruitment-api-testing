import api from "../config.js";
import { expect, use } from "chai";
import chaiJsonSchema from "chai-json-schema-ajv";

use(chaiJsonSchema);

describe("Test Cases for Skill", () => {
  it("should get skll by name", async () => {
    const res = await api.get("/skill/git").query({ page: 1, size: 10 });
    expect(res.status).to.eql(200);
  });
});
