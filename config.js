import "dotenv/config";
import supertest from "supertest";

const api = supertest(process.env.BASE_URL);

const setHeaders = (req) => {
  req.set("X-Tenant-ID", "9999");
  return req;
};

api.setHeaders = setHeaders;

export default api;
