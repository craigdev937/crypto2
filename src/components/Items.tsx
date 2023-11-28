import React from "react";
import { ICoin } from "../models/Interfaces";

export interface COI {
    coin: ICoin
};

export const Items = ({ coin }: COI) => {
    return (
        <React.Fragment>
            <div className="coin-row">
                <p>{coin?.market_cap_rank}</p>
                <div className="items-center">
                    <img className="coin__image" alt={coin?.name} src={coin?.image} />
                    <p>{coin?.symbol.toUpperCase()}</p>
                </div>
                <p>${coin?.current_price.toLocaleString()}</p>
                <p>${coin?.price_change_percentage_24h.toFixed(2)}</p>
                <p className="">${coin?.total_volume.toLocaleString()}</p>
                <p>${coin?.market_cap.toLocaleString()}</p>
            </div>
        </React.Fragment>
    );
};

