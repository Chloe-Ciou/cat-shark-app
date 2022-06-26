/**
 * Custom error handler
 */
export default (err, req, res, next) => {
  if (err.status) {
    return res.status(err.status).json({ status: err.status, message: err.message, ...(err?.details ? { details: err.details } : {}) });
  }

  return res.status(500).join({ status: 500, message: "Internal server error." });
};
