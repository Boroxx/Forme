import { Box, Stack } from "@mui/system";
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
      {stepArray.map((step, index) => {
        if (activeStep == step) {
          return (
            <Box>
              <CircleOutlinedIcon color='primary' />
            </Box>
          );
        } else {
          return (
            <Box>
              <CircleIcon color='primary' />
            </Box>
          );
        }
      })}
    </Stack>
  );
};
