import * as yup from "yup";
import { FormBuilder } from "../forms/FormBuilder";
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

  gender: {
    name: "gender",
    label: "Geschlecht",
    error: "Bitte ein Geschlecht angeben!",
  },
  hobby: {
    name: "hobby",
    label: "Hobby",
    error: "Bitte eine Hobby angeben!",
  },
};

const { email, password, city, hobby, gender } = testModel;

export const initialValues = {
  [email.name]: "",
  [password.name]: "",
  [city.name]: "",
  [hobby.name]: "",
  [gender.name]: "",
};

export const forms = [
  <FormBuilder
    title='Title'
    config={[
      { name: email.name, label: email.label, type: "text" },
      { name: password.name, label: password.label, type: "password" },
      { name: city.name, label: city.label, type: "text" },
    ]}
    submitButtonText='send'
  />,
  <FormBuilder
    title='Next Title Diffrent Schema'
    primaryText='Some Primary Text and explanation'
    config={[
      { name: hobby.name, label: hobby.label, type: "text" },
      { name: gender.name, label: gender.label, type: "text" },
    ]}
    submitButtonText='send'
    backButtonText='back'
  />,
];
// valSchema Array needs to correspond to the count of Forms which are passed to Forme
export const validationSchema = [
  yup.object({
    email: yup.string().email(email.error).required(email.error),
    password: yup.string().required(password.error),
    city: yup.string().required(city.error),
  }),
  yup.object({
    hobby: yup.string().required(hobby.error),
    gender: yup.string().required(gender.error),
  }),
];
