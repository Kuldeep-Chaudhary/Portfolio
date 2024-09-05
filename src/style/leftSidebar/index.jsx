import { Box, Button, List, styled, Typography } from "@mui/material";


export const LeftSidebarContain = styled(Box)(()=>({
    maxWidth:"350px",
    padding:"30px",
    width: "100%",
    borderRadius:"30px",
    border:"1px solid #565656",
    position: "fixed",
    left: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    '& h5':{
        fontSize:"18px",
        color:"#fff",
        marginBottom:"7px"
    },
    '& p':{
        fontSize:"14px",
        
    }
}))

export const LeftSidebarHeader = styled(Box)(()=>({
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:"30px"
}))

export const LeftTitle = styled(Typography)(()=>({
    color:"#fff",
    fontSize:"32px",
    fontWeight:600,
}))

export const LeftDesignation = styled(Typography)(()=>({
    maxWidth:"110px",
    textAlign:"right",
    color:"#fff",
    fontSize:"14px",
    fontWeight:400,
}))

export const CustomImage = styled(Box)(()=>({
    width:"100%",
    maxWidth:"250px",
    marginLeft:"auto",
    marginRight:"auto",
    marginBottom:"40px",
    display:"block",
    borderRadius:"30px"
}))

export const CustomList = styled(List)(()=>({
    display:"flex",
    alignItems:"center",
    justifyContent:"start",
    '& svg':{
        fontSize:"16px"
    }


}))
export const IconWrapper = styled('div')(({ theme }) => ({
    display: 'block',
    width: '50px',
    height: '50px',
    lineHeight: '46px',
    textAlign: 'center',
    border: '2px solid #565656',
    borderRadius: '50%',
    color: '#999999',
    fontSize: '20px',
    transition: '.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  export const HireME = styled(Button)(()=>({
    width:"100%",
    alignContent:"center",
    borderRadius:"20px",
    backgroundColor:"#14c5fd",
    color:"#000000",
    padding: "11px 58px 10px 58px",
    display: "inline-flex",
    borderRadius:"30px",
    textTransform:"uppercase",
    border:"none",
    transition: ".3s",
    cursor: "pointer",
    border: "#14c5fd",
  }))