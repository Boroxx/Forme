# Forme Idea

Forme should be a lightweight fast Multi-Step-Form-Component-Builder with smart Validation handled by Formik and Yup. It's also backed by Material UI Components.


# Basic Structure

The Basic Form-Structure has to be given by a Model like in [https://github.com/Boroxx/Forme/blob/main/src/models/testModel.tsx](testModel.tsx)

After the Form is structured, you have to setup Formik. (Later it will be automatic)

Pass the intitialValues, validationSchema and submitMethod into the Formik-Component and write an overload-Function with the FormBuilder-Component which comes by Forme.

# FormBuilder

The Formbuilder-Component takes an config-JSON which strucures the fields. I will implement more functionalities and dynamics later.
Inside the Forme-Component should be a Stepper which can be configured also. This Stepper and the Form-Builder Component are building the Basis for the Forme Multi-Stepper-Validation and are Core-Components.

