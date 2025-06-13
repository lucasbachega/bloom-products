import { ArrowBack } from "@mui/icons-material";
import {
    Box,
    Container,
    Grid,
    IconButton,
    Paper,
    Rating,
    Stack,
    Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ErrorBox from "../../components/ui/ErrorBox";
import LoadingBox from "../../components/ui/LoadingBox";
import { useProductDetail } from "../../hooks/useProductDetail";
import ImageBox from "./components/ImageBox";
import PriceBox from "./components/PriceBox";

export default function ProductDetailPage() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { data, error, loading } = useProductDetail(productId);

  if (loading) return <LoadingBox />;
  if (error || !data)
    return <ErrorBox error={error || "Produto não encontrado"} />;

  return (
    <Box width="100%">
      <Box
        bgcolor={"backgroundGray.main"}
        py={1}
        position={"sticky"}
        top={{ xs: 120, md: 64 }}
        left={0}
        zIndex={100}
      >
        <Container sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBack />
          </IconButton>
          <Typography noWrap variant="h6" fontWeight={600}>
            {data.title}
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 6 }}>
        <Grid container spacing={3} alignItems="flex-start">
          {/* Foto do produto */}
          <Grid
            size={{ xs: 12, md: 4 }}
            justifyItems={{ xs: "center", md: "flex-start" }}
          >
            <ImageBox image={data.image} title={data.title} />
          </Grid>

          <Grid
            size={{ xs: 12, md: 5 }}
            justifyItems={{ xs: "center", md: "flex-start" }}
          >
            {/* Detalhes do produto */}
            <Box>
              <Typography
                textAlign={{ xs: "center", md: "left" }}
                variant="h4"
                fontWeight={600}
              >
                Produto <strong>{data.id}</strong>
              </Typography>
              <Stack direction={"row"} alignItems={"center"} gap={1}>
                <Rating readOnly value={data.rating.rate} />
                <Typography variant="body2" color="textSecondary">
                  ({data.rating.count} comentários)
                </Typography>
              </Stack>
            </Box>

            {/* Categoria */}
            <Box mt={3}>
              <Typography
                textAlign={{ xs: "center", md: "left" }}
                color="textSecondary"
                variant="h6"
              >
                Categoria
              </Typography>
              <Typography
                textAlign={{ xs: "center", md: "left" }}
                variant="h5"
                textTransform="uppercase"
              >
                {data.category}
              </Typography>
            </Box>

            {/* Descrição */}
            <Stack
              mt={3}
              width={"100%"}
              alignItems={{ xs: "center", md: "flex-start" }}
            >
              <Typography
                textAlign={"center"}
                variant="h6"
                color="textSecondary"
                gutterBottom
              >
                Descrição
              </Typography>
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  border: "none",
                  bgcolor: "action.hover",
                }}
              >
                <Typography variant="body2">{data.description}</Typography>
              </Paper>
            </Stack>
          </Grid>

          {/* Informações de compra */}
          <Grid
            size={{ xs: 12, md: 3 }}
            justifyItems={{ xs: "center", md: "flex-end" }}
          >
            <PriceBox data={data} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
