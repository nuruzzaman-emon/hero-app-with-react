import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Apps from "../Components/Apps/Apps";
import Installation from "../Components/Installation/Installation";
import AppDetails from "../Components/AppDetails/AppDetails";
import Home from "../Components/Home/Home";






export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                index: true,
                loader: () => fetch("../AppData.json"),
                Component: Home
            },
            {
                path: "/apps",
                loader: () => fetch("../AllApp.json"),
                Component: Apps
            },
            {
                path: "/installation",
                loader: () => fetch("../AllApp.json"),
                Component: Installation
            },
            {
                path: "/appsdetails/:id",
                loader: () => fetch("../AllApp.json"),
                Component: AppDetails
            }
        ]
    }
])

