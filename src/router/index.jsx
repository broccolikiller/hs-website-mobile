import {Home} from "../pages/Home/Home.jsx";
import {Navigate} from "react-router-dom";
import {AboutUs} from "../pages/AboutUs/index.jsx";
import {ClassicCase} from "../pages/ClassicCase/index.jsx";
import {ClassicCaseDetail} from "../pages/ClassicCase/ClassicCaseDetail/index.jsx";
import {Production} from "../pages/Production/index.jsx";
import {Solution} from "../pages/Solution/index.jsx";

const routes = [
    {
        path: '/',
        element: <Navigate to={'/home'} replace={true}/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/about-us',
        element: <AboutUs/>
    },
    {
        path: '/classic-case',
        element: <ClassicCase/>
    },
    {
        path: '/classic-case-introduce',
        element: <ClassicCaseDetail/>
    },
    {
        path: '/production',
        element: <Production/>
    },
    {
        path: '/solution',
        element: <Solution/>
    },
    {
        path: '*',
        element: <Navigate to={'/home'} replace={true}/>
    }
]

export default routes