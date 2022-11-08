import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";

interface InputFieldlProps {
  name: string;
}
export const InputField = (props: TextFieldProps & InputFieldlProps) => {
  const [field, meta] = useField(props.name);

  return (
    <TextField
      {...props}
      {...field}
      error={Boolean(meta.touched && meta.error)}
      helperText={meta.error && meta.touched ? meta.error : undefined}
    />
  );
};
