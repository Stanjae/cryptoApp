import {createApi ,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const apiHeaders = {
    'X-RapidAPI-Key': 'ed0260d6camsh03dd68fb264234dp1a9d14jsne1f3acb37325',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }


const createRequest=(url)=> ({url, headers:apiHeaders});

export const cryptoDetailApi = createApi({
    reducerPath:'cryptoDetailApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://coinranking1.p.rapidapi.com'}),
    endpoints: (builder) => ({
        getDetailCrypto: builder.query({
          query: (count) => createRequest(`/coin/${count}`)
        })

    }),
})

export const { useGetDetailCryptoQuery} = cryptoDetailApi;