import { Box } from "@mui/system";
import { Formik } from "formik";

import { FormBuilder } from "../forms/FormBuilder";
import {
  initialValues,
  testModel,
  validationSchema,
} from "../models/testModel";

export const Forme = () => {
  const { email, password, city } = testModel;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ isSubmitting }) => (
        <Box sx={{ p: 5 }}>
          <FormBuilder
            title='Title'
            config={[
              { name: email.name, label: email.label, type: "text" },
              { name: password.name, label: password.label, type: "password" },
              { name: city.name, label: city.label, type: "text" },
            ]}
            submitButtonText='send'
          />
        </Box>
      )}
    </Formik>
  );
};
