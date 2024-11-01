import React from "react";
import { Carousal } from "../../common/carousal/Carousal";
import { Box } from "@mui/material";

//importing Assets
import offer1 from "../../../assets/Group 11.png";
import offer2 from "../../../assets/Group 12.png";

export const AdCarousal = () => {
  const carousalList = [offer1, offer2, offer1, offer2, offer1];
  const items = carousalList.map((item) => (
    <Box component={"img"} src={item} width={"100%"} height={"100%"} />
  ));
  return <Carousal items={items} mdNoItems={2} lgNoItems={3}></Carousal>;
};
