import { Box, Typography, Stack } from "@mui/material";
import React, { createContext, useState } from "react";
import { Button } from "../../common/Button";

import Icon from "../../../assets/CardIcon.png";
import Like from "../../../assets/like.png";
import { BookingSection } from "./BookingSection";

import { SelectedContext } from "../../common/SelectedContext";

export const HospitalCard = ({ id = 1, data, variant, time, date }) => {
  console.log(data);

  const [isBooking, setIsBooking] = useState(false);
  const [selected, setSelected] = useState({
    hospitalID: "",
    date: "",
    slot: "",
  });

  const handleSubmit = (date, time) => {
    const submitData = { hospital: data, date: date, slot: time };
    const bookings = localStorage.getItem("bookings");
    if (bookings) {
      const currentBookings = JSON.parse(bookings);
      const newBookings = [submitData, ...currentBookings];
      localStorage.setItem("bookings", JSON.stringify(newBookings));
    } else {
      localStorage.setItem("bookings", JSON.stringify([submitData]));
    }
  };

  const handleClick = () => {
    setIsBooking(!isBooking);
  };
  return (
    <Stack
      borderRadius={4}
      sx={{ backgroundColor: "white.main" }}
      p={4}
      width={"100%"}
    >
      <Box
        display={"flex"}
        gap={2}
        sx={{
          backgroundColor: "white.main",
          flexDirection: { xs: "column", lg: "row" },
        }}
        justifyContent={"space-between"}
      >
        <Box width={"15%"}>
          <img src={Icon} style={{ width: "100%" }} />
        </Box>
        <Box width={"50%"}>
          <Typography
            variant="h2"
            sx={{ fontSize: "20px", color: "primary.main" }}
          >
            {data["Hospital Name"]}
          </Typography>
          <Box>
            <Typography variant="h1" sx={{ fontSize: "14px" }}>
              {data["City"]} {data["State"]}
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              {data["Address"]}-{data["ZIP Code"]} <br />
              more
            </Typography>
          </Box>
          {!variant && (
            <Box display={"flex"} gap={1} alignItems={"center"}>
              <Typography
                variant={"h1"}
                sx={{ color: "#02A401", fontSize: "14px" }}
              >
                FREE
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                <span style={{ textDecoration: "line-through" }}>₹500</span>{" "}
                Consultation fee at clinic
              </Typography>
            </Box>
          )}
          <Box
            display={"flex"}
            sx={{
              borderTop: "dashed black 1px",
              paddingTop: "1rem",
              marginTop: "1rem",
              color: "white.main",
            }}
          >
            <Box p={0.5} sx={{ backgroundColor: "#02A401" }} borderRadius={2}>
              <Box component={"img"} src={Like} />{" "}
              {data["Hospital overall rating"]}
            </Box>
          </Box>
        </Box>

        {!variant ? (
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            gap={1}
          >
            <Typography
              variant="h3"
              sx={{ fontSize: "14px", color: "#02A401" }}
            >
              Available Today
            </Typography>
            <Button
              handle={handleClick}
              content={"Book FREE Center Visit"}
              variant={"lg"}
              textSize={"14px"}
            />
          </Box>
        ) : (
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            gap={1}
          >
            <Box
              sx={{
                border: "1px solid #2AA7FF",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontSize: "14px", color: "primary.main" }}
              >
                {time}
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #007100",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontSize: "14px", color: "#007100" }}
              >
                {date}
              </Typography>
            </Box>
          </Box>
        )}
      </Box>

      {/* Booking Container */}
      <Box>
        {isBooking && (
          <SelectedContext.Provider
            value={{ selected, setSelected, handleSubmit }}
          >
            <BookingSection hospitalID={id} />
          </SelectedContext.Provider>
        )}
      </Box>
    </Stack>
  );
};
