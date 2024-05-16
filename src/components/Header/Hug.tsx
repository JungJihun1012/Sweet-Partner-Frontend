import { Box } from "@mui/material";
import { HugBackground } from "../../style/Header/HeaderStyle";
import React from "react";
import { HugProps } from "../../types/component";
import FillHug from "./FillHug";


const Hug: React.FC<HugProps> = () => {
  return(
    <Box height = "150px" display= "flex" alignItems="center">
      <HugBackground>
        <FillHug/>
      </HugBackground>
    </Box>
  )
}

export default Hug;