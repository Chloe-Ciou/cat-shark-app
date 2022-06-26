const _200_STATUS_CODE = 200;
const _400_STATUS_CODE = 400;

export const DESCRIBE_PREFIX = "Validation should fail since";
export const ILL_FORMATTED_STR = "The request was ill-formatted.";
export const validationTestProvider = [
  {
    describe: "type must be one of [cat, shark]",
    req: { types: "1, 2, 3, 4" },
    status: _400_STATUS_CODE,
    errMsg: "\"types[0]\" must be one of [cat, shark]"
  },
  {
    describe: "unauthorized field is passed",
    req: { types: "cat", testing: [] },
    status: _400_STATUS_CODE,
    errMsg: "\"testing\" is not allowed"
  }
];

export const integrationTestProviders = [
  {
    describe: "GET /images?types=cat",
    query: ["cat"],
    status: _200_STATUS_CODE,
    resBodyLength: 3
  },
  {
    describe: "GET /images?types=cat,shark",
    query: ["cat", "shark"],
    status: _200_STATUS_CODE,
    resBodyLength: 6
  }
];
