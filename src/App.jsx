import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

import authContext from "./context/authContext";
import { useContext } from "react";

function App() {
  const { isLoggedIn } = useContext(authContext);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/profile"
          element={isLoggedIn ? <UserProfile /> : <AuthPage />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
