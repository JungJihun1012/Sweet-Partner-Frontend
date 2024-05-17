import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

const HomePage = loadable(() => import("./pages/HomePage"));
const LoginPage = loadable(() => import("./pages/LoginPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} loader={HomePage.load} />
        <Route path="/login" element={<LoginPage />} loader={LoginPage.load} />
      </Routes>
    </>
  );
}

export default App;