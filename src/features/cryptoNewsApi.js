import {createApi ,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const apiHeaders = {
    'X-RapidAPI-Key': 'ed0260d6camsh03dd68fb264234dp1a9d14jsne1f3acb37325',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
  }


const createRequest=(url)=> ({url, headers:apiHeaders});

export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk'}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
          query: () => createRequest(`/`)
        }),


    }),
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;