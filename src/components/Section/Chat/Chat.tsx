import styled from "styled-components"


export default function Chat() {
  return(
    <>
      <Container>
        <Input />
        <Circle>
          +
        </Circle>
      </Container>
    </>
  )
}

export const Container = styled.div`
  position: relative;
  background-color: #FFC9C9;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 60px;
  top: 93%;
`;
export const Input = styled.input`
  background-color: #ffffff;
  width: 300px;
  height: 40px;
  border-radius: 30px;
  border: none;
`
export const Circle = styled.button`
  background-color: #ffffff;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;  
`