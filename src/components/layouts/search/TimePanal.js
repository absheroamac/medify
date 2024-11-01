import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useTheme } from "@mui/material";
import { SelectedContext } from "../../common/SelectedContext";

const data = ["11:30 AM", "12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM"];

export const TimePanal = ({
  time = "Morning",
  timeList = data,
  date,
  hospitalID,
}) => {
  const { selected, setSelected, handleSubmit } = useContext(SelectedContext);
  const theme = useTheme();

  const handleClick = (time) => {
    setSelected({
      hospitalID: hospitalID,
      date: date,
      slot: time,
    });

    handleSubmit(date, time);
  };

  return (
    <Box
      display={"flex"}
      gap={3}
      padding={1}
      sx={{ borderTop: "1px solid #F0F0F5" }}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
        width={"20%"}
      >
        <Typography>{time}</Typography>
      </Box>
      <Box display={"flex"} padding={2} gap={2} flexWrap={"wrap"}>
        {timeList.map((time) => {
          const active =
            selected.hospitalID === hospitalID &&
            selected.date === date &&
            selected.slot === time;

          const style = {
            background: active
              ? theme.palette.primary.main
              : theme.palette.white.main,
            color: active
              ? theme.palette.white.main
              : theme.palette.primary.main,
          };

          return (
            <div onClick={() => handleClick(time)}>
              <Box
                sx={{
                  border: "1px solid #2AA7FF",
                  backgroundColor: style.background,
                  padding: "8px 16px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontSize: "14px", color: style.color }}
                >
                  {time}
                </Typography>
              </Box>
            </div>
          );
        })}
      </Box>
    </Box>
  );
};
