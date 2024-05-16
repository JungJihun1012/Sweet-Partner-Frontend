import { Box } from "@mui/material"
import { Footer} from "../../style/Footer/FooterStyle"
import IconButton from "./IconButton"

export const FooterMain = () => {
  return(
    <Box
      height="130px;"
      display= "flex"
      alignItems="center"
    >
      <Footer>
        <IconButton/>
      </Footer>
    </Box>
  )
}