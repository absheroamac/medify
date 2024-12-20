import { Container, Menu, Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import { MenuItem } from "./MenuItem";
import { Button } from "../Button";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = ({ active = null }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Box
        py={4}
        pb={0}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
      >
        <Link to={"/"}>
          <img style={{ height: "27px" }} src={logo} alt="medify Logo" />
        </Link>

        <Box display={"flex"} gap={5} alignItems={"flex-start"}>
          <Box
            display={"flex"}
            gap={3}
            height={"100%"}
            sx={{ display: { xs: "none", lg: "flex" } }}
          >
            <Link to={"/search"} style={{ textDecoration: "none" }}>
              <MenuItem
                title="Find Doctors"
                value={"doctors"}
                current={active}
              />
            </Link>
            <MenuItem title="Hospitals" value={"hospitals"} current={active} />
            <MenuItem title="Medicines" value={"medicines"} current={active} />
            <MenuItem title="Surgeries" value={"surgeries"} current={active} />
            <MenuItem
              title="Software for Provider"
              value={"software"}
              current={active}
            />
            <MenuItem
              title="Facilities"
              value={"facilities"}
              current={active}
            />
          </Box>

          <Link to={"/bookings"} style={{ textDecoration: "none" }}>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Button content={"My Bookings"} />
            </Box>
          </Link>
          <IconButton
            onClick={handleClick}
            sx={{ display: { xs: "block", lg: "none" } }}
          >
            <MenuIcon sx={{ color: "secondary.main" }} />
          </IconButton>
        </Box>
      </Box>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: { xs: "80%", sm: "60%", md: "25%" },
            padding: 2,
            backgroundColor: "background.paper",
            boxShadow: 3,
          },
        }}
      >
        <Box
          display={"flex"}
          gap={4}
          height={"100%"}
          justifyContent={"flex-start"}
          flexDirection={"column"}
          m={4}
        >
          <Box display={"flex"} gap={1} flexDirection={"column"}>
            <Link to={"/search"} style={{ textDecoration: "none" }}>
              <MenuItem
                title="Find Doctors"
                value={"doctors"}
                type="sideMenu"
                current={active}
              />
            </Link>
            <MenuItem
              title="Hospitals"
              value={"hospitals"}
              type="sideMenu"
              current={active}
            />
            <MenuItem
              title="Medicines"
              value={"medicines"}
              type="sideMenu"
              current={active}
            />
            <MenuItem
              title="Surgeries"
              value={"surgeries"}
              type="sideMenu"
              current={active}
            />
            <MenuItem
              title="Software for Provider"
              value={"software"}
              type="sideMenu"
              current={active}
            />
            <MenuItem
              title="Facilities"
              value={"facilities"}
              type="sideMenu"
              current={active}
            />
          </Box>

          <Link to={"/bookings"} style={{ textDecoration: "none" }}>
            <Button content={"My Bookings"} variant={"lg"} />
          </Link>
        </Box>
      </Drawer>
    </Container>
  );
};
