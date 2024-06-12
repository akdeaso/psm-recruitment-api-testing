import { expect } from "chai";
import api from "../config.js";

describe("Test Cases for Applicant Detail", () => {
  it("should get applicant detail by ID", async () => {
    const res = await api.get("/person/pelamar/95");
    expect(res.status).to.eql(200);
    expect(res.body).to.have.property("id", 95);
  });
  it("should get applicant document detail by ID", async () => {
    const res = await api.get("/person/attch/bypersonid/95");
    expect(res.status).to.eql(200);
    expect(res.body.data).to.be.an("array");
  });
  it("should generate applicant CV", async () => {
    const reqBody = {
      personId: 95,
      mainSkill: "",
      role: "Angular Developer",
      tampilKodePelamar: true,
      tampilNama: false,
      tampilRole: true,
      tampilIpk: true,
      jenisCV: "CV-02",
    };
    const res = await api.post("/person/person/generate-cv").send(reqBody);
    expect(res.status).to.eql(200);
  });
});
