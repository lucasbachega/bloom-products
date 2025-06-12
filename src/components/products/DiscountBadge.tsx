import { LocalOfferOutlined } from "@mui/icons-material";
import { Box, BoxProps, Typography } from "@mui/material";
import { memo } from "react";

interface Props {
  discountPercent?: number;
  small?: boolean;
}

const DiscountBadge = ({
  discountPercent = 10,
  small = false,
  ...rest
}: Props & BoxProps) => {
  if (!discountPercent) return null;

  return (
    <Box
      position="absolute"
      borderRadius={100}
      bgcolor="secondary.main"
      top={-5}
      left={-10}
      py={small ? 0.1 : 0.3}
      px={small ? 0.5 : 1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={0.5}
      zIndex={100}
      {...rest}
    >
      <LocalOfferOutlined
        fontSize={small ? "inherit" : "small"}
        sx={{ color: "#FFF", fontSize: small ? "14px" : undefined }}
      />
      <Typography
        textAlign="center"
        fontWeight={600}
        fontSize={small ? "0.75rem" : "1rem"}
        sx={{ color: "#FFF" }}
      >
        {discountPercent}%
      </Typography>
    </Box>
  );
};

export default memo(DiscountBadge);
