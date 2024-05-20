import styled from "styled-components";
import { Mobile } from "../Responsive";

export default function ChatPage() {
  return (
    <Mobile>
      <Container></Container>
    </Mobile>
  );
}

const Container = styled.div`
  flex: 1;
`;
