import request from "supertest";

import app from "../../app";
import { integrationTestProviders } from "./fixture";

const runTest = (p) => {
  const { status, query, describe, resBodyLength } = p;

  it(describe, (done) => {
    request(app)
      .get(`/images?types=${query.join(",")}`)
      .expect(status)
      .expect((res) => {
        expect(res.body.length).toEqual(resBodyLength);
      })
      .expect(200, done);
  });
};

describe("GET /images integration test", () => {
  for (const p of integrationTestProviders) runTest(p);
});
