import { api } from "../config.js";
import { expect } from "chai";

describe("GET products", () => {
  it("should return 200 OK", async () => {
    const res = await api.get("/products");
    expect(res.status).to.eql(200);
  });
});
