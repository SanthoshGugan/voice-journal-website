import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import JournalRecorder from "../components/JournalRecorder";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/rec',
                element: <JournalRecorder />
            },
        ]
    }
]);