import { styled,Box, keyframes } from "@mui/material";


export const Loader = styled(Box)(()=>({
    position: "fixed",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    zIndex:10000,
    background: "#000",
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
}));
const bounceLoader = keyframes`
  0% {
    top: 30px;
    height: 5px;
    border-radius: 60px 60px 20px 20px;
    transform: scaleX(2);
  }
  35%{
    height: 15px;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0;
  }
`;

export const BounceBall = styled(Box)(({ theme }) => ({
    position: "relative",
    display: "inline-block",
    height: "37px",
    width: "15px",
    '&:before': {
      position: "absolute",
      content: "''",
      display: "block",
      top: 0,
      width: "15px",
      height: "15px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      transformOrigin: "50%",
      animation: `${bounceLoader} 500ms alternate infinite ease`,
    }
  }));
  