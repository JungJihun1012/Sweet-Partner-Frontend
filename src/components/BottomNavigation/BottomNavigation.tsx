import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

export const BottomNavigation = () => {
  const location = useLocation();
  return (
    <>
      <Container>
        <Link to={"/"}>
          <Icon icon={fa.faHouse} $isSelected={location.pathname === "/"} />
        </Link>
        <Link to={"/"}>
          <Icon
            icon={fa.faHeart}
            $isSelected={location.pathname.includes("/partner")}
          />
        </Link>
        <Link to={"/"}>
          <Icon
            icon={fa.faChartPie}
            $isSelected={location.pathname.includes("/gragh")}
          />
        </Link>

        <Link to={"/chat"}>
          <Icon
            icon={fa.faMessage}
            $isSelected={location.pathname.includes("/chat")}
          />
        </Link>
        <Link to={"/"}>
          <Icon
            icon={fa.faUser}
            $isSelected={location.pathname.includes("/my")}
          />
        </Link>
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

const Icon = styled(FontAwesomeIcon)<{ $isSelected?: boolean }>`
  font-size: 24px;
  color: ${({ $isSelected }) => ($isSelected ? "#ffc5c5" : "#BABABA")};
`;
