import { Box } from "@mui/material";
import { IconProps } from "../types/component";


const Icon = (props: IconProps) => {
  return(
    <Box width={props.width} height={props.height}>
      <img src={props.src} alt={props.alt} />
    </Box>
  )
}

export default Icon;