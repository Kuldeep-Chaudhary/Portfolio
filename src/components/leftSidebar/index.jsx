import React from "react";
import {
  CustomImage,
  CustomList,
  HireME,
  IconWrapper,
  LeftDesignation,
  LeftSidebarContain,
  LeftSidebarHeader,
  LeftTitle,
} from "../../style/leftSidebar";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const LeftSidebar = () => {
  return (
    <>
      <LeftSidebarContain>
        <LeftSidebarHeader>
          <LeftTitle variant="h4">Kuldeep</LeftTitle>
          <LeftDesignation>Forntend Developer</LeftDesignation>
        </LeftSidebarHeader>
        <CustomImage
          component="img"
          src="/images/profile1.jpg"
          alt="Description"
        />
        <Typography variant="h5">kuldeepchaudhary121212@gmai.com</Typography>
        <Typography variant="h5">Based in Noida,U.P,India</Typography>
        <Typography>© 2022 Kuldeep. All Rights Reserved</Typography>
        <CustomList>
            <ListItemButton>
              <ListItemIcon>
                <IconWrapper>
                  <PhoneIcon />
                </IconWrapper>
              </ListItemIcon>
            </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <IconWrapper>
                <AttachEmailIcon />
              </IconWrapper>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <IconWrapper>
                <LinkedInIcon />
              </IconWrapper>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <IconWrapper>
                <GitHubIcon />
              </IconWrapper>
            </ListItemIcon>
          </ListItemButton>
        </CustomList>
          <HireME >
           <MailOutlineIcon sx={{marginRight:"5px"}}/>Hire ME !
          </HireME>
      </LeftSidebarContain>
    </>
  );
};

export default LeftSidebar;
