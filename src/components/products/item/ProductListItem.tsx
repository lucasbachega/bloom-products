import { Card, CardContent, Typography } from "@mui/material";
import { IProduct } from "../../../types/products";

interface Props {
  product: IProduct;
}

const ProductListItem = ({ product }: Props) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" noWrap>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          R$ {product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductListItem;
