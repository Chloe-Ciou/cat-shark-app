
import { ILL_FORMATTED_STR, DESCRIBE_PREFIX, validationTestProvider } from "./fixture";
import { validateImagesMetadataRequest } from "../../middleware/mwValidators";

const runTest = (p) => {
  const next = (err) => { throw err; };

  it(`${DESCRIBE_PREFIX} ${p.describe}`, (done) => {
    try {
      validateImagesMetadataRequest({ query: p.req }, {}, next);
    } catch (e) {
      expect(e.status).toBe(p.status);
      expect(e.message).toBe(ILL_FORMATTED_STR);
      expect(e.details).toBe(p.errMsg);
      done();
    }
  });
};

describe("GET /images validation test", () => {
  for (const p of validationTestProvider) runTest(p);
});
