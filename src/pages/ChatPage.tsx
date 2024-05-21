import styled from "styled-components";
import { Mobile } from "../Responsive";
import Chat from "../components/Chat/Chat";

export default function ChatPage() {
  return (
    <Mobile>
      <Container>
        <Chat />
      </Container>
    </Mobile>
  );
}

const Container = styled.div`
  flex: 1;
`;
