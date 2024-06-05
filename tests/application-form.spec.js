import api from "../config.js";
import { expect, use } from "chai";
import chaiJsonSchema from "chai-json-schema-ajv";
import { referensiAllSchema } from "../schemas/referensi.js";
import { pelamarAwalSchema } from "../schemas/person.js";

use(chaiJsonSchema);

describe("Test Cases for Application Form", () => {
  it("should get all job roles with required params", async () => {
    const res = await api
      .get("/referensi/jobrole")
      .query({ page: 1, size: 10000, q: "" });
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(referensiAllSchema);
  });
  it("should get all software tools with required params", async () => {
    const res = await api
      .get("/referensi/swtool")
      .query({ page: 1, size: 10000, q: "" });
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(referensiAllSchema);
  });
  it("should send application form", async () => {
    const reqBody = {
      nama: "Bandil",
      email: "asal@ngasal.doang",
      nomorHP: "081234567890",
      profesionalTitle: "D4",
      tanggalLahir: "1999-01-01",
      lamaran: {
        currentSalary: 10000000,
        expectedSalary: 15000000,
        onsite: true,
        kesiapanJoin: "ASAP",
      },
      jobRoles: [
        {
          jobRoleDisplay: "Angular Developer",
          jobRoleId: 3,
          jobRoleName: "angulardeveloper",
        },
      ],
      tools: [
        {
          softwareToolId: 5,
          softwareToolDisplay: "PostgreSQL",
          softwareToolName: "postgresql",
        },
      ],
      toolsSelect: [
        {
          softwareToolId: 5,
          softwareToolDisplay: "PostgreSQL",
          softwareToolName: "postgresql",
        },
      ],
      invitedBy: "dummy@prosigmaka.com",
    };
    const res = await api.post("/person/pelamar/awal").send(reqBody);
    expect(res.status).to.eql(200);
    expect(res.body).to.be.jsonSchema(pelamarAwalSchema);
  });
});
