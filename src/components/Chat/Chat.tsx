import styled from "styled-components";
import { ChatInput } from "./ChatInput";
import { MessageFiled } from "./MessageFiled";

export default function Chat() {
  return (
    <>
      <Container>
        <MessageFiled />
        <ChatInput />
      </Container>
    </>
  );
}

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
`;
