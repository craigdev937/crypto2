import React from "react";
import "./App.css";
import Gene from "@public/Gene1.jpg";

export const App = () => {
    return (
        <React.Fragment>
            <img 
                src={Gene} alt="Gene Hackman"
                height="500px" width="auto" 
            />
        </React.Fragment>
    );
};




