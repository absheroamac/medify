import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Container, TextField, Typography } from "@mui/material";
import { Button } from "../../common/Button";
import { AutoCompleteInput } from "../landingPage/AutoCompleteInput";
import axios from "axios";

export const SearchBoxHospital = ({
  setCity,
  setState,
  state,
  handleSearch,
}) => {
  const searchIcon = <SearchIcon style={{ color: "white" }} />;

  const handleInputChange = (event) => {
    setState(event.target.value);
  };

  return (
    <Box
      sx={{ backgroundColor: "primary.main", width: "100%", height: "110px" }}
    >
      <Container sx={{ position: "relative" }}>
        <Box display={"flex"}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "40px",
              color: "white.main",
              position: "absolute",
              top: "2rem",
            }}
          >
            My Bookings
          </Typography>
          <Box
            p={3}
            borderRadius={4}
            display={"flex"}
            justifyContent={"center"}
            gap={3}
            zIndex={1}
            sx={{
              backgroundColor: "white.main",
              position: "absolute",
              width: "70%",
              top: { xs: "12rem", lg: "4rem" },
              right: { xs: "auto", lg: 0 },
              left: { xs: "50%", lg: "auto" },
              transform: { xs: "translate(-50%, -50%)", lg: "none" },
              flexDirection: { xs: "column", lg: "row" },
            }}
          >
            <TextField
              placeholder="Search Hospital"
              variant="outlined"
              onChange={handleInputChange}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2, // Adjust to match Autocomplete's rounded corners
                  paddingRight: 0, // No extra padding for button alignment
                },
                "& .MuiOutlinedInput-input": {
                  padding: "14px 14px", // Match the inner padding of Autocomplete
                },
              }}
            />
            <Button
              variant={"lg"}
              content={"Search"}
              icon={searchIcon}
              handle={handleSearch}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
