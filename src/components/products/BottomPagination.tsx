import { Box, Pagination } from "@mui/material";
import { memo } from "react";

interface Props {
  totalPages: number;
  page: number;
  onPageChange?: (page: number) => void;
}

const BottomPagination = ({
  totalPages = 0,
  page = 1,
  onPageChange = () => {},
}: Props) => {
  return (
    <Box mt={5} display="flex" justifyContent="center">
      <Pagination
        sx={{
          "& .MuiButtonBase-root": {
            transition: "none",
          },
        }}
        count={totalPages}
        page={page}
        onChange={(_, value) => onPageChange(value)}
        color="primary"
        variant="outlined"
        shape="rounded"
      />
    </Box>
  );
};

export default memo(BottomPagination);
