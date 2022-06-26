import Joi from "joi";

import { IMAGE_TYPES } from "../shared/constants";

export const imagesRequestSchema = Joi.object().keys({
  types: Joi.array().min(0).items(Joi.string().valid(...Object.values(IMAGE_TYPES)))
}).required().min(1);
