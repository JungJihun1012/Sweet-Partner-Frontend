import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Mobile } from "../Responsive";
import { Input, TextField } from "@mui/material";
import { useUser } from "../store/User";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function RegisterPage() {
  const { user } = useUser();
  const [date, setDate] = useState(new Date());
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
  });

  const handleClick = (date: Date) => {
    console.log(date.getDate());
  };
  return (
    <>
      <Mobile>
        <Container>
          <Title>정보입력</Title>
          <Form>
            <InputArea></InputArea>
            <TextInput fullWidth color="info" value={user.name} disabled />
            <TextInput fullWidth color="info" value={user.email} disabled />
            <CalendarArea>
              {date.toString}
              <DatePicker
                dateFormat={"yyyy.MM.dd"}
                shouldCloseOnSelect
                selected={date}
                onChange={(date) => {
                  setDate(date!);
                  console.log(date);
                }}
              />
            </CalendarArea>
          </Form>
        </Container>
      </Mobile>
    </>
  );
}

const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-flow: column;
  gap: 20px;
  height: 100%;
`;

const Title = styled.div`
  text-align: center;
  font-size: 32px;
  font-family: "P-B";
  color: #ff8282;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column;
  background: #fff;
  padding: 12px;
  gap: 30px;
  border-radius: 8px;
  height: 100%;
`;

const TextInput = styled(TextField)``;

const CalendarArea = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
`;

const CalendarTitle = styled.p`
  text-align: center;
  font-size: 22px;
  font-family: "P-B";
`;

const InputArea = styled.div``;
