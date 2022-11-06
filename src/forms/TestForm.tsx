import { Button } from "@mui/material";
import { Form } from "formik";
import React from "react";
import { InputField } from "../component/InputField";
import { TestModel } from "../models/testModel";

export const TestForm = (props: TestModel) => {
  const { email } = props;
  return (
    <Form>
      <InputField name={email.name} />

      <Button variant='outlined' type='submit'>
        Send
      </Button>
    </Form>
  );
};
