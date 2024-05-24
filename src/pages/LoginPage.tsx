import { Mobile } from "../Responsive";
import styled from "styled-components";
import googleLogo from "../assets/google.svg";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function LoginPage() {
  const { data } = useQuery({
    queryKey: ["oauth"],
    queryFn: async () => {
      const response = await axios.get(
        "http://localhost:8000/auth/google/authorize"
      );
      const url = response.data.authorization_url;
      console.log(url);

      return url;
    },
    refetchOnWindowFocus: false,
  });

  const handleClick = () => {
    window.location.replace(data);
  };

  return (
    <>
      <Mobile>
        <Container>
          <Logo>스위트파트너</Logo>
          <LoginButton onClick={handleClick}>
            <img src={googleLogo} alt="" />
            <Text>Google 로그인</Text>
          </LoginButton>
        </Container>
      </Mobile>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  padding: 300px 45px 150px;
`;

const Logo = styled.p`
  font-size: 50px;
  font-family: "K";
`;

const LoginButton = styled.div`
  width: 100%;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const Text = styled.p`
  font-size: 20px;
  font-family: "P-M";
  color: rgba(0, 0, 0, 0.5);
`;
