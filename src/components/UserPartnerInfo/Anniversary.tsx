import { Box } from "@mui/material";
import styled from "styled-components";

export const Anniversary = () => {
  return (
    <>
      <Container>
        <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
          <Title>가까운 기념일</Title>
          <Box padding={"5px"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"5px"}
              alignItems={"center"}
            >
              <Text>발렌타인데이</Text>
              <Text>D-80</Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

const Container = styled.div``;
const Title = styled.div`
  font-size: 14px;
`;
const Text = styled.div`
  font-size: 14px;
`;
