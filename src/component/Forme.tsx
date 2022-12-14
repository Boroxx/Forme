import { Box } from "@mui/system";
import { Formik } from "formik";
import React, { useState } from "react";

import { initialValues, validationSchema } from "../models/testModel";
import { Stepper } from "./Stepper";

interface FormeProps {
  formDialogs: React.ReactElement[];
}
export interface FormeContextI {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

export const FormeContext = React.createContext<FormeContextI | null>(null);

export const Forme = (props: FormeProps) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const stepLength = props.formDialogs.length;

  const renderForms = (step: number) => {
    return props.formDialogs[step];
  };

  //Selects the right ValidationSchema from your Model
  const getCurrentValSchema = () => {
    if (activeStep > stepLength) {
      setActiveStep(stepLength);
      return validationSchema[activeStep];
    }

    return validationSchema[activeStep];
  };

  return (
    <FormeContext.Provider
      value={{ activeStep: activeStep, setActiveStep: setActiveStep }}
    >
      <Box sx={{ m: 2, display: "flex", justifyContent: "center" }}>
        <Stepper stepLength={stepLength} activeStep={activeStep} />
      </Box>

      <Formik
        initialValues={initialValues}
        validationSchema={getCurrentValSchema()}
        onSubmit={(values) => {
          setActiveStep(activeStep + 1);
        }}
      >
        {({ isSubmitting }) => <Box>{renderForms(activeStep)}</Box>}
      </Formik>
    </FormeContext.Provider>
  );
};
