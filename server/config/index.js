import { ENVS } from "../shared/constants";

process.env.NODE_ENV = process.env.NODE_ENV || ENVS.LOCAL;

switch (process.env.NODE_ENV) {
  case ENVS.LOCAL:
    process.env.PORT = 3000;
    break;
  case ENVS.PROD:
    process.env.PORT = 3000;
    break;
  default:
    process.env.PORT = 3000;
}
