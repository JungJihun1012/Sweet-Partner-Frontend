import styled from "styled-components";
import { Names } from "./Names";
import { D_Day } from "./D_Day";

/**
 *
 * @returns 연인의 이름과 Dday를 표시하는 컴포넌트
 */
export const Top = () => {
  return (
    <>
      <Container>
        <Names />
        <D_Day />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
