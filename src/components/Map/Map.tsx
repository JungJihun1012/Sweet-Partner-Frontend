import styled from "styled-components";
import KakaoMap from "./KakaoMap";

export const Map = () => {
  return (
    <>
      <Container>
        <SelectShareLocation>위치공유 활성화중</SelectShareLocation>
        <KakaoMap />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-flow: column;
  gap: 10px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.25);
`;

const SelectShareLocation = styled.div`
  font-family: "P-B";
  font-size: 20px;
  color: #34c759;
`;
