const yup = require("yup");

function Mentor(data) {
  const schema = yup.object({
    id: yup.string(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup.number().min(18).required(),
    email: yup
      .string()
      .email()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "This is not a valid email"
      )
      .required(),
    phone: yup.string().min(10).max(10).required(),
  });

  const mentor = schema.cast(data);
  schema.validateSync(mentor);

  return mentor;
}

module.exports = Mentor;
