import { InfoOutlineRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const ErrorBox = ({ error }: { error: string }) => {
  return (
    <Box mt={"200px"} textAlign="center">
      <InfoOutlineRounded color="error" sx={{ fontSize: "5rem" }} />
      <Typography textAlign={"center"} fontWeight={600} mt={2}>
        {error}
      </Typography>
    </Box>
  );
};

export default ErrorBox;
