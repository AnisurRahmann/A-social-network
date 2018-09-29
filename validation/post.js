//!!!!!!!!validator github for documentations!!!!!!

const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};
  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "post must be between 10 or 300 cherecter";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "text field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
