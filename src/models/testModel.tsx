import * as yup from "yup";
// eslint-disable-next-line import/no-anonymous-default-export

interface TestModelAttribs {
  name: string;
  label: string;
  error: string;
}

export interface TestModel {
  email: TestModelAttribs;
}
export const testModel = {
  email: {
    name: "email",
    label: "E-Mail",
    error: "Bitte Email angeben!",
  },
  password: {
    name: "password",
    label: "Password",
    error: "Bitte ein Password angeben!",
  },
  city: {
    name: "city",
    label: "City",
    error: "Bitte eine Stadt angeben!",
  },
};

const { email, password, city } = testModel;

export const initialValues = {
  [email.name]: "",
  [password.name]: "",
  [city.name]: "",
};

export const validationSchema = yup.object({
  email: yup.string().email(email.error).required(email.error),
  password: yup.string().required(password.error),
  city: yup.string().required(city.error),
});
