import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICoin } from "../models/Interfaces";

// const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
const URL = "https://api.coingecko.com/api/";


export const CryptoAPI = createApi({
    reducerPath: "CryptoAPI",
    tagTypes: ["Coin", "Coins"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        crypto: builder.mutation({
            query: ({page, perPage}) => {
                const perPageSize = Number(perPage);
                console.log("perPageSize", )
                return {
                    url: `v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=${
                        Number(perPageSize)}page=${
                            page}&sparkline=false`,
                    method: "GET"
                }
            }
        })
    })
});





