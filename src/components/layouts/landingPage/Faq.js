import { Box, Container, Typography } from "@mui/material";
import React from "react";
import HappyImage from "../../../assets/happyImage.png";
import { FaqAccordion } from "./FaqAccordion";

export const Faq = () => {
  return (
    <Container>
      <Box
        py={7}
        gap={2}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: "1rem", color: "primary.main" }}
        >
          Get Your Answers
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", lg: "2.5rem" },
            color: "secondary.main",
            textAlign: "center",
          }}
        >
          Frequently Asked Questions
        </Typography>
      </Box>

      <Box
        display={"flex"}
        sx={{
          justifyContent: { xs: "center", lg: "flex-start" },
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Box component={"img"} src={HappyImage} />
        <FaqAccordion />
      </Box>
    </Container>
  );
};
