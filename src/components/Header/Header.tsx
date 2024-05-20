import styled from "styled-components";

export const Header = () => {
  return (
    <>
      <Container>홈</Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 60px;
  background: #fff;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
`;
