import { Box, Collapse, Paper, Stack, Typography } from "@mui/material";
import AddToCartButton from "../../../components/AddToCartButton";
import QuantityInput from "../../../components/cart/QuantityInput";
import DiscountBadge from "../../../components/products/DiscountBadge";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { useIsInCart } from "../../../hooks/useIsInCart";
import { selectItemTotalByProductId } from "../../../store/reducers/cartSlice";
import { IProduct } from "../../../types/products";
import { formatAmount } from "../../../utils/formatters";

function TotalPrice({ productId }: { productId: number }) {
  const total = useAppSelector((state) =>
    selectItemTotalByProductId(state, productId)
  );

  return (
    <Stack
      bgcolor={"action.hover"}
      direction={"row"}
      alignItems={"center"}
      mx={-2}
      mb={-3}
      px={3}
      py={2}
      mt={3}
    >
      <Box flex={1} />
      <Typography fontSize={"1.2rem"} fontWeight={600}>
        = R$ {formatAmount(total || 0)}
      </Typography>
    </Stack>
  );
}

function AddToCartWrapper({ product }: { product: IProduct }) {
  const isInCart = useIsInCart(product.id);

  return (
    <>
      <AddToCartButton
        product={product}
        stackProps={{ sx: { mt: 3, gap: 0 } }}
        buttonProps={{
          size: "large",
        }}
        iconButtonProps={{
          size: "medium",
          sx: {
            "& .MuiSvgIcon-root": {
              fontSize: "25px",
            },
          },
        }}
      />
      <Collapse timeout={100} in={isInCart}>
        <Stack mt={2} direction={"row"} alignItems={"center"} gap={1}>
          <Typography fontWeight={600} color="textSecondary">
            QTDE:
          </Typography>
          <Box flex={1} />
          <QuantityInput
            productId={product.id}
            border={1}
            borderColor={"divider"}
            borderRadius={100}
          />
        </Stack>
        <TotalPrice productId={product.id} />
      </Collapse>
    </>
  );
}

const PriceBox = ({ data }: { data: IProduct }) => {
  return (
    <Box mt={2} position="relative" width={"100%"}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          px: 2,
          borderRadius: 1,
        }}
      >
        {data.hasDiscount ? (
          <Typography
            fontWeight={600}
            sx={{
              textDecoration: "line-through",
              color: "text.disabled",
            }}
          >
            DE: R$ {formatAmount(data.price.toFixed(2))}
          </Typography>
        ) : (
          <Typography
            component={"span"}
            color="textSecondary"
            fontSize={"1.3rem"}
          >
            Preço
            <br />
          </Typography>
        )}
        <Typography variant="h4" fontWeight={800} color="primary" mt={0.3}>
          {data.hasDiscount && (
            <>
              <Typography
                component={"span"}
                color="textSecondary"
                fontSize={"1.3rem"}
              >
                POR:
              </Typography>{" "}
            </>
          )}
          R$ {formatAmount(data?.discountPrice?.toFixed(2))}
        </Typography>
        <AddToCartWrapper product={data} />
      </Paper>

      {data.hasDiscount && (
        <DiscountBadge
          discountPercent={data.discountPercent}
          sx={{
            position: "absolute",
            top: -10,
            right: -10,
            left: undefined,
          }}
        />
      )}
    </Box>
  );
};

export default PriceBox;
