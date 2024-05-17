import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";

export const BottomNavigation = () => {
  return (
    <>
      <Container>
        <FontAwesomeIcon icon={fa.faHouse} fontSize={22} />
        <FontAwesomeIcon icon={fa.faHeart} fontSize={22} />
        <FontAwesomeIcon icon={fa.faChartPie} fontSize={22} />
        <FontAwesomeIcon icon={fa.faMessage} fontSize={22} />
        <FontAwesomeIcon icon={fa.faUser} fontSize={22} />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  align-items: center;
`;
