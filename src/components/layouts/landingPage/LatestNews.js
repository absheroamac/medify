import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { NewsCard } from "./NewsCard";
import { Carousal } from "../../common/carousal/Carousal";

export const LatestNews = () => {
  const items = [
    <NewsCard key={1} />,
    <NewsCard key={2} />,
    <NewsCard key={2} />,
  ];
  return (
    <Container sx={{ marginBottom: "5rem" }}>
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
          sx={{ fontSize: "1rem", color: "primary.main", textAlign: "center" }}
        >
          Blog & News
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", lg: "2.5rem" },
            color: "secondary.main",
            textAlign: "center",
          }}
        >
          Read Our Latest News
        </Typography>
      </Box>
      <Box width={"100%"} display={"flex"} gap={3} justifyContent={"center"}>
        <Carousal items={items} smNoItems={1} mdNoItems={2} lgNoItems={3} />
      </Box>
    </Container>
  );
};
