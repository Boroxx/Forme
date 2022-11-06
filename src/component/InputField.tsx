import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";
import React from "react";

interface InputFieldlProps {
  name: string;
}
export const InputField = (props: TextFieldProps & InputFieldlProps) => {
  const [field, meta] = useField(props.name);
  console.log(meta);
  return (
    <TextField
      {...props}
      {...field}
      error={Boolean(meta.touched && meta.error)}
      helperText={meta.error && meta.touched ? meta.error : undefined}
    />
  );
};
