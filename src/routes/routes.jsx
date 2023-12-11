import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import GamePage from "../pages/GamePage";
import { ProfilePage } from "../pages/ProfilePage";
import { AboutPage } from "../pages/AboutPage";
<<<<<<< HEAD
import Login from "../components/Login";
=======
import {LoginAccountPage} from "../pages/LoginAccountPage";
>>>>>>> main
import Register from "../components/Register";
 
const routes = (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/game/:userId" element={<GamePage />} />
    <Route path="/profile/:userId" element={<ProfilePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/login" element={<LoginAccountPage />} />
    <Route path="/create-account" element={<Register />} />
  </Routes>
);
 
export default routes;