import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import OurLinks from "./pages/OurLinks.jsx";
import StudentProjects from "./pages/StudentProjects.jsx";
import ErrorElement from "./components/ErrorElement/ErrorElement.jsx";
import Interesting from "./pages/Interesting.jsx";
import Resources from "./pages/Resources.jsx";
import WebDevelopment from "./pages/WebDevelopment.jsx";
import AIModel from "./pages/AIModel.jsx";
import Python from "./pages/Python.jsx";
import AcademicDiscounts from "./pages/AcademicDiscounts.jsx";
import PullRequest from "./pages/PullRequest.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorElement/>,
    },
    {
      path: "/pullrequest",
      element: <PullRequest/>,
      errorElement: <ErrorElement/>,
    },
    {
        path: "/OurLinks",
        element: <OurLinks/>,
    },
    {
        path: "/StudentProjects",
        element: <StudentProjects/>,
    },
    {
        path: "/Interesting",
        element: <Interesting/>,
    },
    {
        path: "/Resources",
        element: <Resources/>,
    },
    {
        path: "/Resources/WebDevelopment",
        element: <WebDevelopment/>,
    },
    {
        path: "/Resources/Python",
        element: <Python/>,
    },
    {
        path: "/Resources/AIModel",
        element: <AIModel/>,
    },
    {
        path: "/Resources/AcademicDiscounts",
        element: <AcademicDiscounts/>,
    }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
