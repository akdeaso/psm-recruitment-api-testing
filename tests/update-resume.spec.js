import { expect } from "chai";
import { api } from "../config.js";

describe("Test Cases for Update Resume", () => {
  it("should update applicant personal data", async () => {
    const reqBody = {
      id: 84,
      userId: "alfiansyah@test.testasd",
      email: "alfiansyah@test.testasd",
      nik: "35111111111",
      nomorID: null,
      jenisIdentitas: "KTP",
      nama: "Coba Alfiansyah Email Sama",
      namaPanggilan: "",
      profesionalTitle: "'",
      jenisKelamin: "PRIA",
      alamat: "",
      domisili: "",
      alamatSesuaiIdentitas: "",
      kelurahanSesuaiIdentitas: "",
      nomorTelponTempatTinggal: null,
      nomorHP: "0812345678",
      tempatLahir: "",
      tanggalLahir: "2024-05-28",
      tanggalLamaran: "2024-05-28",
      kodePelamar: "PSM-00034",
      attachmentProfilePhotoId: 104,
      profilePhotoUri: null,
      attachmentCVId: null,
      attachmentIjazahId: null,
      attachmentTranskripId: null,
      cvUri: null,
      ijazahUri: null,
      transkripUri: null,
      blackListed: false,
      invitedBy: "dummy@prosigmaka.com",
      lamaran: {
        personId: 84,
        applyDate: "2024-05-28",
        currentSalary: 16000000,
        expectedSalary: 8000000,
        onsite: true,
        remote: false,
        kesiapanJoin: "ASAP",
        statusPekerjaanSekarang: "",
        alasanKeluar: "",
        concernLokasiKerja: "",
        concernIndustry: "",
        contractBaseOk: true,
        selesaiKontrak: "",
        namaReferensi: "",
        nomorTelponReferensi: "",
        statusRekomendasi: "",
        gradeSalary: "",
        softSkill: "",
        notAvailable: false,
        notAvailableNote: "",
        hiringStatus: "APPLY",
        sudahInterviewTro: false,
        tro: null,
        jadwalInterviewTro: null,
        waktuInterviewTro: null,
        sudahInterviewRo: false,
        ro: null,
        jadwalInterviewRo: null,
        waktuInterviewRo: null,
        source: "",
        invitedBy: "dummy@prosigmaka.com",
      },
      jobRoles: [
        {
          personId: 84,
          applyDate: "2024-05-28",
          jobRoleId: 2,
          jobRoleName: "androidnativedeveloper",
          jobRoleDisplay: "Android Native Developer",
          level: "",
          tahunPengalaman: null,
          levelRekomendasi: 0,
          prefered: false,
          nrNote: "",
          updatedAt: null,
          updater: null,
        },
      ],
      tools: [],
      pendingRequiredActions: null,
    };
    const res = await api.post("/person/pelamar").send(reqBody);
    expect(res.status).to.eql(200);
  });
  it("should get applicant personal data", async () => {
    const res = await api.get("/person/pelamar/84");
    expect(res.status).to.eql(200);
    expect(res.body.data.id).to.eql(84);
  });
  it("should update applicant education data", async () => {
    const reqBody = {
      personId: 84,
      pendidikan: [
        {
          personId: 84,
          bulanMulai: 1,
          tahunMulai: "2019",
          bulanSelesai: 6,
          tahunSelesai: "2023",
          jenjang: "S1",
          nama: "Universitas Terbuka",
          jurusan: "Teknik Informatika",
          nilai: "3.5",
        },
      ],
    };
    const res = await api.post("/person/eduhist").send(reqBody);
    expect(res.status).to.eql(200);
  });
  it("should get applicant education data", async () => {
    const res = await api.get("/person/eduhist/by-person/84");
    expect(res.status).to.eql(200);
    expect(res.body.data[0].personId).to.eql(84);
  });
  it("should update applicant experience data", async () => {
    const reqBody = {
      personId: 84,
      pengalaman: [
        {
          id: 0,
          personId: 84,
          bulanMasuk: 1,
          tahunMasuk: "2022",
          bulanKeluar: 2,
          tahunKeluar: "2024",
          deskripsi: "oke gas",
          nama: "PT Lentera Alam Nusantara",
          jabatanTerakhir: "Web developer",
          gajiTerakhir: 7000000,
          tools: [
            {
              employmentHistoryId: 0,
              personId: 84,
              intensitas: 0,
              softwareToolId: 4,
              softwareToolDisplay: "Laravel",
              softwareToolName: "laravel",
            },
          ],
          currentlyWorkHere: false,
          internship: false,
        },
      ],
    };
    const res = await api.post("/person/riwayat-kerja").send(reqBody);
    expect(res.status).to.eql(200);
  });
  it("should get applicant experience data", async () => {
    const res = await api.get("/person/riwayat-kerja/by-person/84");
    expect(res.status).to.eql(200);
    expect(res.body.data[0].personId).to.eql(84);
  });
  it("should update applicant project data", async () => {
    const reqBody = {
      personId: 84,
      projects: [
        {
          id: 0,
          personId: 84,
          employementHistoryId: 39,
          nama: "Ecommerece",
          bulanMulai: 1,
          tahunMulai: 2022,
          bulanSelesai: 2,
          tahunSelesai: 2024,
          deskripsi: "oemke gams",
          keahlian: null,
          tags: null,
          masihBerjalan: false,
          employmentHistory: {
            id: 39,
            personId: 84,
            nama: "PT Lentera Alam Nusantara",
            tahunMasuk: 2022,
            bulanMasuk: 1,
            tahunKeluar: 2024,
            bulanKeluar: 2,
            jabatanTerakhir: "Web developer",
            gajiTerakhir: 7000000,
            deskripsi: "oke gas",
            currentlyWorkHere: false,
            internship: false,
            tools: [
              {
                personId: 84,
                employmentHistoryId: 39,
                softwareToolId: 4,
                softwareToolName: "laravel",
                softwareToolDisplay: "Laravel",
                intensitas: 0,
              },
            ],
          },
          tools: [
            {
              projectHistoryId: 0,
              personId: 84,
              intensitas: 0,
              softwareToolId: 4,
              softwareToolDisplay: "Laravel",
              softwareToolName: "laravel",
            },
          ],
        },
      ],
    };
    const res = await api.post("/person/dataproject").send(reqBody);
    expect(res.status).to.eql(200);
  });
  it("should update applicant project tool data", async () => {
    const reqBody = {
      personId: 84,
      projectId: 30,
      tools: [
        {
          projectHistoryId: 0,
          personId: 84,
          intensitas: 0,
          softwareToolId: 4,
          softwareToolDisplay: "Laravel",
          softwareToolName: "laravel",
        },
      ],
    };
    const res = await api.post("/person/dataprojecttool").send(reqBody);
    expect(res.status).to.eql(200);
  });
  it("should get applicant project data", async () => {
    const res = await api.get("/person/project/by-person/84");
    expect(res.status).to.eql(200);
    expect(res.body.data[0].personId).to.eql(84);
  });
  it("should update applicant training data", async () => {
    const reqBody = {
      personId: 84,
      trainings: [
        {
          personId: 84,
          bulan: 2,
          tahun: "2022",
          nama: "Fullstack web",
          penyelenggara: "Digitalent",
          keterangan: "omke gams",
          durasi: 3,
          jenisDurasi: "BULAN",
        },
      ],
    };
    const res = await api.post("/person/datatraining").send(reqBody);
    expect(res.status).to.eql(200);
  });
  it("should get applicant training data", async () => {
    const res = await api.get("/person/training/by-person/84");
    expect(res.status).to.eql(200);
    expect(res.body.data[0].personId).to.eql(84);
  });
  it("should update applicant certification data", async () => {
    const reqBody = {
      personId: 84,
      certificates: [
        {
          personId: 84,
          year: 2023,
          nama: "CCNA",
          expirationDate: "2025-05-20",
          validDateFrom: "2023-05-20",
          tahunMulaiBerlaku: 2023,
          tahunBerlakuHingga: 2025,
          issuer: "Cisco",
          url: "ccna.com/dummy-certification",
        },
      ],
    };
    const res = await api.post("/person/datasertifikasi").send(reqBody);
    expect(res.status).to.eql(200);
  });
  it("should get applicant certification data", async () => {
    const res = await api.get("/person/certi/by-person/84");
    expect(res.status).to.eql(200);
    expect(res.body.data[0].personId).to.eql(84);
  });
  it("should update person note data", async () => {
    const reqBody = {
      id: 0,
      personId: 84,
      note: "<p><strong>Technical (+) : omke banget</strong></p><p><br></p><p><strong>Technical (-) : ohio rizz</strong></p><p><br></p><p><strong>Non-Technical : sigma skibidi</strong></p>",
      type: "TRO_NOTE",
    };
    const res = await api.post("/person/personnote").send(reqBody);
    expect(res.status).to.eql(200);
  });
  it("should update applicant note TRO data", async () => {
    const reqBody = {
      id: 84,
      userId: "alfiansyah@test.testasd",
      email: "alfiansyah@test.testasd",
      nik: "35111111111",
      nomorID: null,
      jenisIdentitas: "KTP",
      nama: "Coba Alfiansyah Email Sama",
      namaPanggilan: "",
      profesionalTitle: "'",
      jenisKelamin: "PRIA",
      alamat: "",
      domisili: "",
      alamatSesuaiIdentitas: "",
      kelurahanSesuaiIdentitas: "",
      nomorTelponTempatTinggal: null,
      nomorHP: "0812345678",
      tempatLahir: "",
      tanggalLahir: "2024-05-28",
      tanggalLamaran: "2024-05-28",
      kodePelamar: "PSM-00034",
      attachmentProfilePhotoId: 104,
      profilePhotoUri:
        "https://siska.nunukan.pass-pdam.com/person/attch/9999/104",
      attachmentCVId: null,
      attachmentIjazahId: null,
      attachmentTranskripId: null,
      cvUri: null,
      ijazahUri: null,
      transkripUri: null,
      blackListed: false,
      invitedBy: "dummy@prosigmaka.com",
      lamaran: {
        personId: 84,
        applyDate: "2024-05-28",
        currentSalary: 16000000,
        expectedSalary: 8000000,
        onsite: true,
        remote: false,
        kesiapanJoin: "ASAP",
        statusPekerjaanSekarang: "",
        alasanKeluar: "",
        concernLokasiKerja: "",
        concernIndustry: "",
        contractBaseOk: true,
        selesaiKontrak: "",
        namaReferensi: "",
        nomorTelponReferensi: "",
        statusRekomendasi: "",
        gradeSalary: "",
        softSkill: "",
        notAvailable: false,
        notAvailableNote: "",
        hiringStatus: "CV_UPDATED",
        sudahInterviewTro: false,
        tro: null,
        jadwalInterviewTro: null,
        waktuInterviewTro: null,
        sudahInterviewRo: false,
        ro: null,
        jadwalInterviewRo: null,
        waktuInterviewRo: null,
        source: "",
        invitedBy: "dummy@prosigmaka.com",
      },
      jobRoles: [
        {
          personId: 84,
          applyDate: "2024-05-28",
          jobRoleId: 2,
          jobRoleName: "androidnativedeveloper",
          jobRoleDisplay: "Android Native Developer",
          level: "junior",
          tahunPengalaman: "1",
          levelRekomendasi: 0,
          prefered: false,
          nrNote: "<p>omke gams</p>",
          updatedAt: null,
          updater: null,
        },
      ],
      tools: [
        {
          applyDate: "",
          currentIntensivelyUsed: true,
          intensitas: 0,
          personId: 84,
          softwareToolId: 4,
          softwareToolDisplay: "Laravel",
          softwareToolName: "laravel",
          id: 4,
          name: "Laravel",
        },
      ],
      pendingRequiredActions: null,
    };
    const res = await api.post("/person/pelamar").send(reqBody);
    expect(res.status).to.eql(200);
  });
  it("should get applicant data", async () => {
    const res = await api.get("/person/pelamar/84");
    expect(res.status).to.eql(200);
    expect(res.body.data.id).to.eql(84);
  });
  it("should get applicant note TRO data", async () => {
    const res = await api.get("/person/personnote/bypersonid/84/TRO_NOTE");
    expect(res.status).to.eql(200);
    expect(res.body.data[0].personId).to.eql(84);
  });
  it("should change TRO status to Fail", async () => {
    const reqBody = { personId: 84, type: "TRO_FAIL" };
    const res = await api.post("/person/hiringstatus").send(reqBody);
    expect(res.status).to.eql(200);
    expect(res.body.data.troFail).to.eql(true);
  });
  it("should change TRO status to Pass", async () => {
    const reqBody = { personId: 84, type: "TRO_PASS" };
    const res = await api.post("/person/hiringstatus").send(reqBody);
    expect(res.status).to.eql(200);
    expect(res.body.data.troPass).to.eql(true);
  });
  it("should get applicant hiring status", async () => {
    const res = await api.get("/person/hiringstatus/9999/84");
    expect(res.status).to.eql(200);
    expect(res.body.data.personId).to.eql(84);
  });
  it("should update person note data", async () => {
    const reqBody = {
      id: 0,
      personId: 84,
      note: "<p>omke gams</p>",
      type: "RO_NOTE",
    };
    const res = await api.post("/person/personnote").send(reqBody);
    expect(res.status).to.eql(200);
  });
  it("should update applicant note RO data", async () => {
    const reqBody = {
      id: 84,
      userId: "alfiansyah@test.testasd",
      email: "alfiansyah@test.testasd",
      nik: "35111111111",
      nomorID: null,
      jenisIdentitas: "KTP",
      nama: "Coba Alfiansyah Email Sama",
      namaPanggilan: "",
      profesionalTitle: "'",
      jenisKelamin: "PRIA",
      alamat: "",
      domisili: "Surabaya",
      alamatSesuaiIdentitas: "",
      kelurahanSesuaiIdentitas: "",
      nomorTelponTempatTinggal: null,
      nomorHP: "0812345678",
      tempatLahir: "",
      tanggalLahir: "2024-05-28",
      tanggalLamaran: "2024-05-28",
      kodePelamar: "PSM-00034",
      attachmentProfilePhotoId: 104,
      profilePhotoUri:
        "https://siska.nunukan.pass-pdam.com/person/attch/9999/104",
      attachmentCVId: null,
      attachmentIjazahId: null,
      attachmentTranskripId: null,
      cvUri: null,
      ijazahUri: null,
      transkripUri: null,
      blackListed: false,
      invitedBy: "dummy@prosigmaka.com",
      lamaran: {
        personId: 84,
        applyDate: "2024-05-28",
        currentSalary: 16000000,
        expectedSalary: 8000000,
        onsite: true,
        remote: false,
        kesiapanJoin: "ASAP",
        statusPekerjaanSekarang: "Kontrak",
        alasanKeluar: "Habis kontrak",
        concernLokasiKerja: "tidak ada",
        concernIndustry: "tidak ada",
        contractBaseOk: true,
        selesaiKontrak: "2024-06-14",
        namaReferensi: "bams",
        nomorTelponReferensi: "1111111111111",
        statusRekomendasi: "Recommended",
        gradeSalary: "1",
        softSkill: "<p>omke bamnget</p>",
        notAvailable: false,
        notAvailableNote: "",
        hiringStatus: "TRO_PASS",
        sudahInterviewTro: true,
        tro: "dummy@prosigmaka.com",
        jadwalInterviewTro: null,
        waktuInterviewTro: "2024-06-13T06:47:32",
        sudahInterviewRo: false,
        ro: null,
        jadwalInterviewRo: null,
        waktuInterviewRo: null,
        source: "",
        invitedBy: "dummy@prosigmaka.com",
      },
      jobRoles: [
        {
          personId: 84,
          applyDate: "2024-05-28",
          jobRoleId: 2,
          jobRoleName: "androidnativedeveloper",
          jobRoleDisplay: "Android Native Developer",
          level: "junior",
          tahunPengalaman: 1,
          levelRekomendasi: 0,
          prefered: false,
          nrNote: "<p>omke gams</p>",
          updatedAt: null,
          updater: null,
        },
      ],
      tools: [
        {
          personId: 84,
          applyDate: "2024-05-28",
          softwareToolId: 4,
          softwareToolName: "laravel",
          softwareToolDisplay: "Laravel",
          intensitas: 0,
          currentIntensivelyUsed: true,
        },
      ],
      pendingRequiredActions: null,
      note: "<p>omke gams</p>",
    };
    const res = await api.post("/person/pelamar").send(reqBody);
    expect(res.status).to.eql(200);
  });
  it("should get applicant data", async () => {
    const res = await api.get("/person/pelamar/84");
    expect(res.status).to.eql(200);
    expect(res.body.data.id).to.eql(84);
  });
  it("should get applicant note RO data", async () => {
    const res = await api.get("/person/personnote/bypersonid/84/RO_NOTE");
    expect(res.status).to.eql(200);
    expect(res.body.data[0].personId).to.eql(84);
  });
  it("should change RO status to Fail", async () => {
    const reqBody = { personId: 84, type: "RO_FAIL" };
    const res = await api.post("/person/hiringstatus").send(reqBody);
    expect(res.status).to.eql(200);
    expect(res.body.data.roFail).to.eql(true);
  });
  it("should change RO status to Pass", async () => {
    const reqBody = { personId: 84, type: "RO_PASS" };
    const res = await api.post("/person/hiringstatus").send(reqBody);
    expect(res.status).to.eql(200);
    expect(res.body.data.roPass).to.eql(true);
  });
  it("should blacklist applicant", async () => {
    const reqBody = {
      personId: 84,
      email: "alfiansyah@test.testasd",
      name: "Coba Alfiansyah Email Sama",
      note: null,
    };
    const res = await api.post("/person/blacklist").send(reqBody);
    expect(res.status).to.eql(200);
  });
  it("should cancel blacklist from applicant", async () => {
    const reqBody = {
      personId: 84,
      email: "alfiansyah@test.testasd",
      name: "Coba Alfiansyah Email Sama",
      note: null,
    };
    const res = await api.delete("/person/blacklist").send(reqBody);
    expect(res.status).to.eql(200);
  });
  it('should set applicant to "Not Available"', async () => {
    const reqBody = {
      personId: 84,
      tanggalLamaran: "2024-05-28",
      notAvailableNote: null,
    };
    const res = await api.post("/person/pelamar/notavail").send(reqBody);
    expect(res.status).to.eql(200);
  });
  it('should set applicant to "Available"', async () => {
    const reqBody = {
      personId: 84,
      tanggalLamaran: "2024-05-28",
      notAvailableNote: null,
    };
    const res = await api.post("/person/pelamar/cancel-notavail").send(reqBody);
    expect(res.status).to.eql(200);
  });
  it('should upadate applicant cv status to "CV_NEED_UPDATE"', async () => {
    const reqBody = { personId: 84, cvStatusType: "CV_NEED_UPDATE" };
    const res = await api.post("/person/personreqaction").send(reqBody);
    expect(res.status).to.eql(200);
  });
  it('should upadate applicant cv status to "CV_READY"', async () => {
    const reqBody = { personId: 84, cvStatusType: "CV_READY" };
    const res = await api.post("/person/personreqaction").send(reqBody);
    expect(res.status).to.eql(200);
  });
});
