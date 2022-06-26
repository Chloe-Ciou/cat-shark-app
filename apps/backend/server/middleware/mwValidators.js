import requestValidator from "../validators";
import { HTTP_ERRORS, IMAGE_TYPES } from "../shared/constants";
import { imagesRequestSchema } from "../validators/requestSchema";

/**
 * Validates incoming request data for querying images
 */
export const validateImagesMetadataRequest = (req, res, next) => {
  try {
    const { types } = req.query;

    req.query.types = types ? types.split(",") : Object.values(IMAGE_TYPES);
    requestValidator(req.query, imagesRequestSchema);
    next();
  } catch (e) {
    const httpErr = HTTP_ERRORS.BAD_REQUEST;
    httpErr.details = e.message;
    next(httpErr);
  }
};
