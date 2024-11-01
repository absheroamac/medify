import React from "react";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";

//importing Assets
import Caring from "../../../assets/caring.png";
import Tick from "../../../assets/tick.png";

export const PatientCaring = () => {
  const theme = useTheme();

  return (
    <Box py={7} sx={{ background: theme.customGradients.brandGradient }}>
      <Container>
        <Box
          display={"flex"}
          justifyContent={"center"}
          sx={{ flexDirection: { xs: "column", lg: "row" } }}
          alignItems={"center"}
          gap={7}
        >
          <Box width={"100%"}>
            <img src={Caring} style={{ width: "100%" }} />
          </Box>
          <Stack
            gap={3}
            sx={{
              justifyContent: { xs: "center", lg: "flex-start" },
              alignItems: { xs: "center", lg: "flex-start" },
            }}
          >
            <Stack
              gap={2}
              sx={{
                justifyContent: { xs: "center", lg: "flex-start" },
                alignItems: { xs: "center", lg: "flex-start" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: "1rem",
                  color: "primary.main",
                  textAlign: "center",
                }}
              >
                HELPING PATIENTS FROM AROUND THE GLOBE!
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", lg: "2.5rem" },
                  color: "secondary.main",
                }}
              >
                Patient{" "}
                <span style={{ color: theme.palette.primary.main }}>
                  Caring
                </span>
              </Typography>
            </Stack>
            <Stack
              gap={8}
              sx={{
                justifyContent: { xs: "center", lg: "flex-start" },
                alignItems: { xs: "center", lg: "flex-start" },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: "1rem",
                  color: "#77829D",
                  textAlign: { xs: "center", lg: "left" },
                }}
                lineHeight={1.5}
              >
                Our goal is to deliver quality of care in a courteous,
                respectful, and compassionate manner. We hope you will allow us
                to care for you and strive to be the first and best choice for
                healthcare.
              </Typography>
              <Stack gap={4}>
                <Box display={"flex"} gap={1}>
                  <Box component={"img"} src={Tick} />
                  <Typography variant="h3" sx={{ fontSize: "18px" }}>
                    Stay Updated About your Health
                  </Typography>
                </Box>

                <Box display={"flex"} gap={1}>
                  <Box component={"img"} src={Tick} />
                  <Typography variant="h3" sx={{ fontSize: "18px" }}>
                    Check Your Results Online
                  </Typography>
                </Box>

                <Box display={"flex"} gap={1}>
                  <Box component={"img"} src={Tick} />
                  <Typography variant="h3" sx={{ fontSize: "18px" }}>
                    Manage Your Appoinments
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
