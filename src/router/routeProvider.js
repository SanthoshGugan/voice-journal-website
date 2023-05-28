import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import { Children } from "react";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            
        ]
    }
]);