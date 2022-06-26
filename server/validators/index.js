/**
 * Validates incoming data with predefined joi schema
 * @param {Object} data
 * @param {Object} joiSchema Joi Schema
 */
const validateRequest = (data, joiSchema) => {
  const { error, value } = joiSchema.validate(data);

  if (error) {
    throw Error(error?.details?.[0]?.message || error.message);
  }

  return value;
};

export default validateRequest;
