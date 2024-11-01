import { Box, colors, Container, Typography } from "@mui/material";
import React from "react";
import heroImage from "../../../assets/heroImage.png";
import { useTheme } from "@mui/material/styles";
import { Button } from "../../common/Button";

export const HeroSection = () => {
  const theme = useTheme();

  const spanStyle = {
    color: theme.palette.primary.main,
  };

  return (
    <Container>
      <Box
        display={"flex"}
        sx={{ flexDirection: { xs: "column", lg: "row" } }}
        flexDirection={"row"}
        height={"100%"}
        py={6}
        container
      >
        <Box
          display={"flex"}
          gap={4}
          alignItems={"flex-start"}
          sx={{
            flexDirection: "column",
            width: { xs: "100%", lg: "50%" },
            alignItems: { xs: "center", lg: "flex-start" },
          }}
          flexDirection={"column"}
          height={"100%"}
          width={"50%"}
          py={3}
        >
          <Box
            display={"flex"}
            gap={1}
            alignItems={"flex-start"}
            flexDirection={"column"}
            sx={{ alignItems: { xs: "center", lg: "flex-start" } }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", lg: "2.5rem" },
                textAlign: { xs: "center", lg: "left" },
              }}
              variant="h3"
            >
              Skip the travel! Find Online
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "2.5rem", lg: "3.5rem" },
                textAlign: { xs: "center", lg: "left" },
              }}
              variant="h1"
            >
              Medical <span style={spanStyle}>Centers</span>
            </Typography>
          </Box>
          <Typography
            variant="h4"
            sx={{
              lineHeight: "1.5",
              color: "territory.main",
              fontSize: { xs: "1rem", lg: "1.3rem" },
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </Typography>
          <Button variant={"lg"} content={"Find Centers"} />
        </Box>
        <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
          <img
            style={{ width: "100%", zIndex: 0 }}
            src={heroImage}
            alt="An Image of Doctors"
          />
        </Box>
      </Box>
    </Container>
  );
};
