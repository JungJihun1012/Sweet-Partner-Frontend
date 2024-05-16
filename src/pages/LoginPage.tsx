import { Stack, Typography } from "@mui/material";
import { Mobile } from "../Responsive";
export default function LoginPage() {
  return (
    <>
      <Mobile>
        <Stack
          alignItems="center"
          width="100%"
          height="100%"
          justifyContent="space-around"
        >
          <Stack width="80%" alignItems="center" gap="20px">
            <img src="img/heart-15-icon.png" alt="heart-15" />
            <Typography
              fontSize="12px"
              fontWeight="bold"
              style={{ wordWrap: "break-word", textAlign: "center" }}
            >
              스위터파트너
              <br />
              즐겨보세요
            </Typography>
          </Stack>
          <button></button>
        </Stack>
      </Mobile>
    </>
  );
}
