import { Box } from "@mui/material";

interface Props {
  image: string;
  title?: string;
}

const ImageBox = ({ image, title }: Props) => {
  return (
    <Box
      border={2}
      borderColor="primary.main"
      borderRadius={2}
      overflow="hidden"
      position="relative"
      width="100%"
      maxWidth={350}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </Box>
  );
};

export default ImageBox;
