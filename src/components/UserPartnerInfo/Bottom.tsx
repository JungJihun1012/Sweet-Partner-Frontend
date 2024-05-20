import styled from "styled-components";
import { Anniversary } from "./Anniversary";

/**
 *
 * @returns 가까운 기념일을 알려주는 컴포넌트
 */
export const Bottom = () => {
  return (
    <>
      <Container>
        <Anniversary />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
`;
