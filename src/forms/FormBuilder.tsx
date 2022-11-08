import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Form } from "formik";
import { useContext } from "react";
import { FormeContext } from "../component/Forme";
import { InputField } from "../component/InputField";

interface FormBuilderProps {
  config: FormBuilderField[];
  title: string;
  submitButtonText: string;
  backButtonText?: string;
  primaryText?: string;
}

interface FormBuilderField {
  name: string;
  label: string;
  type: string;
  doubleRow?: boolean;
}
export const FormBuilder = (props: FormBuilderProps) => {
  const formeContext = useContext(FormeContext);

  if (!formeContext) return null;
  const { activeStep, setActiveStep } = formeContext;

  const renderInputs = () => {
    return props.config.map((formBuilderField, index) => {
      if (formBuilderField.type === "text") {
        return (
          <Grid item xs={12} md={6} key={index}>
            <InputField
              fullWidth
              name={formBuilderField.name}
              label={formBuilderField.label}
              type={formBuilderField.type}
            />
          </Grid>
        );
      } else if (formBuilderField.type === "password") {
        return (
          <Grid item xs={12} md={6} key={index}>
            <InputField
              fullWidth
              name={formBuilderField.name}
              label={formBuilderField.label}
              type={formBuilderField.type}
            />
          </Grid>
        );
      } else return <div>Something went wrong</div>;
    });
  };

  const handleBackButtonOnClick = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <Grid container sx={{ mt: 4 }}>
      {props.primaryText && (
        <Grid
          item
          sx={{
            m: 2,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant='h5'>{props.primaryText}</Typography>
          </Box>
        </Grid>
      )}

      <Grid item>
        <Form>
          <Grid container direction='column' spacing={2}>
            <Grid item>
              <h3>{props.title}</h3>
            </Grid>
            {renderInputs()}
            <Grid xs={12} md={6} item>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                {props.backButtonText && (
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={handleBackButtonOnClick}
                  >
                    {props.backButtonText}
                  </Button>
                )}

                <Button variant='contained' color='primary' type='submit'>
                  {props.submitButtonText}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Form>
      </Grid>
    </Grid>
  );
};
