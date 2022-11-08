import { Stack } from "@mui/system";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

interface StepperProps {
  stepLength: number;
  activeStep: number;
}
export const Stepper = (props: StepperProps) => {
  const { activeStep, stepLength } = props;
  const stepArray = Array.from(Array(stepLength).keys());

  return (
    <Stack direction='row' spacing={2}>
      {stepArray.map((step) => {
        if (activeStep === step) {
          return (
            <>
              <CircleOutlinedIcon color='primary' />
            </>
          );
        } else {
          if (step === 0) {
            return (
              <>
                <CircleOutlinedIcon color='primary' />
              </>
            );
          }
          return (
            <>
              <CircleIcon color='primary' />
            </>
          );
        }
      })}
    </Stack>
  );
};
