const yup = require("yup");
/*
    koder
    -firstName
    -lastName
    -age
    -email
    -phone
*/

const koderAttributes = ["firstName", "lastName", "age", "email", "phone"];

// Version sin yup
/*function Koder(data) {
  koderAttributes.forEach((attribute) => {
    if (!data[attribute]) {
      throw new Error(`${attribute} is required`);
    }
  });

  if (data.age < 18) {
    throw new Error("Age must be greater than 18");
  }

  const emailRegex =
    /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  if (!emailRegex.test(data.email)) {
    throw new Error("Email is invalid");
  }

  return {
    firstName: data.firstName,
    lastName: data.lastName,
    age: data.age,
    email: data.email,
    phone: data.phone,
  };
}
*/
// Version con yup

function Koder(data) {
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

  const koder = schema.cast(data);
  schema.validateSync(koder);

  return koder;
}

module.exports = Koder;
