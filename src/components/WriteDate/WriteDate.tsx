import styled from "styled-components";

export const WriteDate = () => {
  return (
    <>
      <Container>데이트 일정 작성</Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  font-size: 16px;
`;
