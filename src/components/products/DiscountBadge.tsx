import { LocalOfferOutlined } from "@mui/icons-material";
import { Box, BoxProps, Typography } from "@mui/material";
import { memo } from "react";

interface Props {
  discountPercent?: number;
}

const DiscountBadge = ({ discountPercent = 0, ...rest }: Props & BoxProps) => {
  if (!Boolean(discountPercent)) {
    return <></>;
  }

  return (
    <Box
      position={"absolute"}
      borderRadius={100}
      bgcolor={"secondary.main"}
      top={-5}
      left={-10}
      py={0.3}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      px={1}
      gap={0.5}
      zIndex={100}
      {...rest}
    >
      <LocalOfferOutlined fontSize="small" sx={{ color: "#FFF" }} />
      <Typography
        textAlign={"center"}
        fontWeight={600}
        fontSize={"1rem"}
        sx={{ color: "#FFF" }}
      >
        {discountPercent}%
      </Typography>
    </Box>
  );
};

export default memo(DiscountBadge);
