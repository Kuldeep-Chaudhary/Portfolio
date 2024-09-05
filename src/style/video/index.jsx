import { Box, styled } from "@mui/material";

const StyledVideo = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  opacity:"0.3",
  zIndex: -1,
}));

export const CustomVideo = (props) => (
  <StyledVideo component="video" {...props} />
);