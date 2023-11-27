import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { Navbar } from "./Navbar";
import { NotFound } from "../components/NotFound";
import { Coin } from "../containers/coin/Coin";
import { Coins } from "../containers/coins/Coins";

export const Main = () => {

    const Router = createBrowserRouter([
        {
            path: "/",
            element: <Navbar />,
            errorElement: <NotFound />,
            children: [
                {
                    path: "/",
                    element: <Coins />,
                    errorElement: <NotFound />
                },
                {
                    path: "/coin/:id",
                    element: <Coin />,
                    errorElement: <NotFound />
                }
            ]
        }
    ]);
    
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};


