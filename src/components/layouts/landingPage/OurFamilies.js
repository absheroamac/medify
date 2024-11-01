import React from "react";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";

//importing Assets

import OurFamiliesCards from "../../../assets/ourFamiliesCards.png";

export const OurFamilies = () => {
  const theme = useTheme();

  return (
    <Box py={7} sx={{ background: theme.customGradients.brandGradient }}>
      <Container>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={7}
          sx={{ flexDirection: { xs: "column", lg: "row" } }}
        >
          <Stack gap={3} sx={{ width: { xs: "100%", lg: "70%" } }}>
            <Stack gap={2}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "1rem",
                  color: "primary.main",
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", lg: "2.5rem" },
                  color: "secondary.main",
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                Our Families
              </Typography>
            </Stack>

            <Typography
              variant="h3"
              sx={{
                fontSize: "1rem",
                color: "#77829D",
                textAlign: { xs: "center", lg: "left" },
              }}
              lineHeight={2}
            >
              We will work with you to develop individualised care plans,
              including management of chronic diseases. If we cannot assist, we
              can provide referrals or advice about the type of practitioner you
              require. We treat all enquiries sensitively and in the strictest
              confidence.
            </Typography>
          </Stack>

          <Box sx={{ width: { xs: "100%", lg: "50%" } }}>
            <img src={OurFamiliesCards} style={{ width: "100%" }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
