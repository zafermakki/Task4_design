import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login/Login";
import SignUp from "../components/signup/SignUp";
import Password from "../components/password/Password";
import Verification from "../components/verification/Verification";
import Landing from "../components/landing/Landing";
import Profile from "../components/profile/Profile";

export const routes = createBrowserRouter([
    {
        path:'',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/password',
        element: <Password/>
    },
    {
        path: '/verification',
        element: <Verification/>
    },
    {
        path: '/landing',
        element: <Landing />
    },
    {
        path: '/profile',
        element: <Profile/>
    }
])