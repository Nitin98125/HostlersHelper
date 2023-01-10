import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Authentication/login";
import Home from "./home";
import SignupForm from "./Authentication/signup";
import CompleteYourProfile from "./completeprofile";

const RoutesDefiner = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='login' element={<LoginForm/>}></Route>
            <Route path='register' element={<SignupForm/>}></Route>
            <Route path='completeprofile' element={<CompleteYourProfile/>}></Route>
        </Routes>
        </BrowserRouter>
    );
}

export default RoutesDefiner;