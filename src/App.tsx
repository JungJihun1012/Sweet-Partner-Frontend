import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";


const HomePage = loadable(() => import("./pages/HomePage"));
const LoginPage = loadable(() => import("./pages/LoginPage"));
const ChatPage = loadable(() => import("./pages/ChatPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<HomePage />} loader={HomePage.load} />
        <Route path="/login" element={<LoginPage />} loader={LoginPage.load} />
        <Route path="/Chat" element={<ChatPage />} loader={ChatPage.load} />
      </Routes>
    </>
  );
}

export default App;