import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ErrorBox from "../../components/ui/ErrorBox";
import LoadingBox from "../../components/ui/LoadingBox";
import { useProductDetail } from "../../hooks/useProductDetail";

export default () => {
  const { productId } = useParams();
  const { data, error, loading } = useProductDetail(productId);

  if (loading) return <LoadingBox />;
  if (error) return <ErrorBox error={error || "Produto não encontrado"} />;

  return (
    <Box>
      <Typography>Produto: {productId}</Typography>
    </Box>
  );
};
