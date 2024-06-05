import api from "../config.js";
import { expect, use } from "chai";
import chaiJsonSchema from "chai-json-schema-ajv";
import { filterSchema } from "../schemas/person.js";

use(chaiJsonSchema);

describe("Test Cases for Application list", () => {
  it("should get filltered application list data by ID PSM", async () => {
    const reqBody = {
      kodePelamar: "PSM-00007",
    };
    const res = await api.post("/person/pelamar/advancesearch").send(reqBody);
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(filterSchema);
  });
  it("should get filltered application list data by Name", async () => {
    const reqBody = {
      nama: "alfian",
    };
    const res = await api.post("/person/pelamar/advancesearch").send(reqBody);
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(filterSchema);
  });
  it("should get filltered application list data by Roles", async () => {
    const reqBody = {
      roles: "angular",
    };
    const res = await api.post("/person/pelamar/advancesearch").send(reqBody);
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(filterSchema);
  });
  it("should get filltered application list data by Tools", async () => {
    const reqBody = {
      tools: "adobe",
    };
    const res = await api.post("/person/pelamar/advancesearch").send(reqBody);
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(filterSchema);
  });
  it("should get filltered application list data by Status Kandidat", async () => {
    const reqBody = {
      status: ["APPLY"],
    };
    const res = await api.post("/person/pelamar/advancesearch").send(reqBody);
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(filterSchema);
  });
  it("should get filltered application list data by Tahun Pengalaman", async () => {
    const reqBody = {
      tahunPengalaman: 1,
    };
    const res = await api.post("/person/pelamar/advancesearch").send(reqBody);
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(filterSchema);
  });
  it("should get filltered application list data by Seniority", async () => {
    const reqBody = {
      level: "junior",
    };
    const res = await api.post("/person/pelamar/advancesearch").send(reqBody);
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(filterSchema);
  });
  it("should get filltered application list data by Availabilty", async () => {
    const reqBody = {
      availability: "ASAP",
    };
    const res = await api.post("/person/pelamar/advancesearch").send(reqBody);
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(filterSchema);
  });
  it("should get filltered application list data by Last Update", async () => {
    const reqBody = {
      lastUpdate: "2024-06-05",
    };
    const res = await api.post("/person/pelamar/advancesearch").send(reqBody);
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(filterSchema);
  });
  it("should get filltered application list data by CV Status", async () => {
    const reqBody = {
      cvStatus: "CV_READY",
    };
    const res = await api.post("/person/pelamar/advancesearch").send(reqBody);
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(filterSchema);
  });
  it("should get filltered application list data by Invited by", async () => {
    const reqBody = {
      invitedBy: "dummy@prosigmaka.com",
    };
    const res = await api.post("/person/pelamar/advancesearch").send(reqBody);
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(filterSchema);
  });
});
