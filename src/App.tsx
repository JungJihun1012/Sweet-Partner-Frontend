import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import loadable from "@loadable/component";
import styled from "styled-components";
import { Header } from "./components/Header/Header";
import { BottomNavigation } from "./components/BottomNavigation/BottomNavigation";
import { useEffect } from "react";
import { useUser } from "./store/User";

const HomePage = loadable(() => import("./pages/HomePage"));
const LoginPage = loadable(() => import("./pages/LoginPage"));
const ChatPage = loadable(() => import("./pages/ChatPage"));
const RegisterPage = loadable(() => import("./pages/RegisterPage"));

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setName, setEmail } = useUser();
  useEffect(() => {
    if (
      (localStorage.getItem("email") === null ||
        localStorage.getItem("name")) === null ||
      location.pathname.includes("/register")
    ) {
      setName(localStorage.getItem("name")!);
      setEmail(localStorage.getItem("email")!);
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setEmail, setName]);
  return (
    <>
      <Container>
        {!location.pathname.includes("/login") &&
        !location.pathname.includes("/register") ? (
          <Header />
        ) : (
          <></>
        )}
        <Routes>
          <Route
            path="/login"
            element={<LoginPage />}
            loader={LoginPage.load}
          />
          <Route path="/" element={<HomePage />} loader={HomePage.load} />
          <Route path="/chat" element={<ChatPage />} loader={ChatPage.load} />
          <Route
            path="/register"
            element={<RegisterPage />}
            loader={RegisterPage.load}
          />
        </Routes>
        {!location.pathname.includes("/login") &&
        !location.pathname.includes("/register") ? (
          <BottomNavigation />
        ) : (
          <></>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  background: #ffe2e2;
  height: 100vh;
`;

export default App;
