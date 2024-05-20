import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import styled from "styled-components";
import { Header } from "./components/Header/Header";
import { BottomNavigation } from "./components/BottomNavigation/BottomNavigation";

const HomePage = loadable(() => import("./pages/HomePage"));
const LoginPage = loadable(() => import("./pages/LoginPage"));
const ChatPage = loadable(() => import("./pages/ChatPage"));

function App() {
  return (
    <>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} loader={HomePage.load} />
          <Route
            path="/login"
            element={<LoginPage />}
            loader={LoginPage.load}
          />
          <Route path="/chat" element={<ChatPage />} loader={ChatPage.load} />
        </Routes>
        <BottomNavigation />
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
