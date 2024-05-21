import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export const ChatInput = () => {
  return (
    <>
      <Container>
        <Input />
        <SendButton>
          <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#aaa" }} />
        </SendButton>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 10px 24px;
  background: #ffc9c9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  width: 85%;
  padding: 10px 18px;
  font-size: 18px;
  border: 1px solid #d97a7a00;
  border-radius: 100px;
  transition: 0.2s;

  &:focus {
    outline: none;
    border: 1px solid #d97a7a;
  }
`;

const SendButton = styled.div`
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    background: #ffe2e2;
  }
`;
