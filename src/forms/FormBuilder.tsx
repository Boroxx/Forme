import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Form } from "formik";
import React from "react";
import { InputField } from "../component/InputField";

interface FormBuilderProps {
  config: FormBuilderField[];
  title: string;
  submitButtonText: string;
}

interface FormBuilderField {
  name: string;
  label: string;
  type: string;
  doubleRow?: boolean;
}
export const FormBuilder = (props: FormBuilderProps) => {
  const renderInputs = () => {
    return props.config.map((formBuilderField, index) => {
      if (formBuilderField.type === "text") {
        return (
          <Grid item key={index}>
            <InputField
              name={formBuilderField.name}
              label={formBuilderField.label}
              type={formBuilderField.type}
            />
          </Grid>
        );
      } else if (formBuilderField.type === "password") {
        return (
          <Grid item key={index}>
            <InputField
              name={formBuilderField.name}
              label={formBuilderField.label}
              type={formBuilderField.type}
            />
          </Grid>
        );
      } else return <div>Something went wrong</div>;
    });
  };
  return (
    <Box>
      <Form>
        <Grid
          container
          alignItems='center'
          justifyContent='center'
          direction='column'
          spacing={2}
        >
          <Grid item>
            <h1>{props.title}</h1>
          </Grid>
          {renderInputs()}
          <Grid item>
            <Button fullWidth variant='contained' color='primary' type='submit'>
              {props.submitButtonText}
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Box>
  );
};
