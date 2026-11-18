const rateLimit = require("express-rate-limit");

const standardLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 

  max: 5, 

  standardHeaders: true,

  legacyHeaders: false,

  message: {
    message: "Too many requests. Please try again later.",
  },
});

module.exports = {
    standardLimiter
}