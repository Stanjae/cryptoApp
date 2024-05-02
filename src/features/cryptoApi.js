import {createApi ,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const apiHeaders = {
    'X-RapidAPI-Key': 'ed0260d6camsh03dd68fb264234dp1a9d14jsne1f3acb37325',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }


const createRequest=(url)=> ({url, headers:apiHeaders});

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://coinranking1.p.rapidapi.com'}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
          query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getTotalCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
          }),


    }),
})

export const { useGetCryptosQuery, useGetTotalCryptosQuery } = cryptoApi;