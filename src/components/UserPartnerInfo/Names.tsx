import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../store/User";

export const Names = () => {
  const { user } = useUser();
  return (
    <>
      <Container>
        {user.name}
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: "#FF3B30" }}
          fontSize={16}
        />
        {user.name}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 5px;
  font-size: 18px;
  align-items: center;
`;
