import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Authentication/login";
import Home from "../pages/home/home";
import SignupForm from "./Authentication/signup";
import Profile from "../pages/profile/profile";

const RoutesDefiner = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='login' element={<LoginForm/>}></Route>
            <Route path='register' element={<SignupForm/>}></Route>
            <Route path='profile' element={<Profile/>}></Route>
        </Routes>
        </BrowserRouter>
    );
}

export default RoutesDefiner;