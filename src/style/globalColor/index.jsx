
import { Button, styled ,keyframes} from "@mui/material";

export const GBColor = styled('div')(()=>({
    position: "fixed",
    left: "0",
    top: "75px",
    zIndex:100,
}))
const rotating = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const GBButton = styled(Button)(({})=>({
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    fontSize:"20px",
    cursor:"pointer",
    background:"#1f1f1f",
    minWidth:"0",
    borderRadius:"5px",
    '& svg':{
        
        color:"#999999",
        fontSize:"20px",
        animation: `${rotating} 3s infinite linear`,
        
    }
}))
