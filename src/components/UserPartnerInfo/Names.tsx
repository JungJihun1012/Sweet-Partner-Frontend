import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Names = () => {
  return (
    <>
      <Container>
        이은상
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: "#FF3B30" }}
          fontSize={16}
        />
        김수진
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
