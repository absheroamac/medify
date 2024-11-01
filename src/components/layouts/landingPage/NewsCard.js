import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

import NewsImg from "../../../assets/newsCardImage.png";
import Author from "../../../assets/author.jpg";

export const NewsCard = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Card sx={{ width: "100%" }}>
        <CardMedia
          component="img" // Ensure CardMedia is set as img
          image={NewsImg}
          alt="News Image" // Add alt text
        />

        <CardContent>
          <Box display={"flex"} mb={2}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "1rem",
                borderRight: "solid #DDDDDD 1px",
                paddingRight: "1rem",
                color: "territory.main",
              }}
            >
              Medical
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: "1rem",
                paddingLeft: "1rem",
                color: "territory.main",
              }}
            >
              March 31, 2022
            </Typography>
          </Box>
          <Typography variant="h3" sx={{ fontSize: "18px" }}>
            6 Tips To Protect YOur Mental Health When You're Sick
          </Typography>
          <Box display={"flex"} gap={1} alignItems={"center"} mt={2}>
            <Box component={"img"} src={Author} />
            <Typography variant="h3" sx={{ fontSize: "1rem" }}>
              Revecca Lee
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
