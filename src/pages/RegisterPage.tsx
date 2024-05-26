import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Mobile } from "../Responsive";
import { Input, TextField } from "@mui/material";
import { Calendar } from "react-calendar";
import "../style/CalendarRegister.css";
import moment from "moment";
import { useUser } from "../store/User";

export default function RegisterPage() {
  const { user } = useUser();
  const [selectedDate, setSelectedDate] = useState(new Date());

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
              <CalendarTitle>사귄 날짜</CalendarTitle>
              <Calendar
                view="month"
                prev2Label={null}
                next2Label={null}
                calendarType="gregory"
                onClickDay={(props) => {
                  console.log(props);
                  return "active";
                }}
                // onChange={handleClick}
                value={selectedDate}
                formatDay={(locale, date) => moment(date).format("D")}
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
