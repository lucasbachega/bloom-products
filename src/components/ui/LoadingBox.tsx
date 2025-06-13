import { CircularProgress, Stack } from "@mui/material";

const LoadingBox = () => {
  return (
    <Stack alignItems={"center"} height={350} justifyContent={"center"}>
      <CircularProgress thickness={5} />
    </Stack>
  );
};

export default LoadingBox;
