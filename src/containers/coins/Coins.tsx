import React from "react";
import "./Coins.css";
import { CryptoAPI } from "../../global/CryptoAPI";
import { Items } from "../../components/Items";

export const Coins = () => {
    const [getCryptos, {data}] = CryptoAPI.useCryptoMutation();
    console.log("data", data);
    React.useEffect(() => {
        const fetchCoinData = async () => {
            await getCryptos(1);
        }
        fetchCoinData();
    }, []);
    

    return (
        <React.Fragment>
            <div className="max-screen">
                <div className="flex_con">
                    <p>#</p>
                    <p>Coin</p>
                    <p>Price</p>
                    <p>Volume</p>
                    <p>Market Cap</p>
                </div>
            </div>            
        </React.Fragment>
    );
};


