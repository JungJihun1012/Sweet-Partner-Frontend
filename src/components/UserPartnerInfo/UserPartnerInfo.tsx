import styled from "styled-components";
import { Top } from "./Top";
import { Bottom } from "./Bottom";

export const UserPartnerInfo = () => {
  return (
    <>
      <Container>
        <Top />
        <Bottom />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  background: #fff;
`;
