import {createApi ,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const apiHeaders = {
    'X-RapidAPI-Key': 'ed0260d6camsh03dd68fb264234dp1a9d14jsne1f3acb37325',
    'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
  }


const createRequest=(url)=> ({url, headers:apiHeaders});

export const relatedNewsApi = createApi({
    reducerPath:'relatedNewsApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://google-news13.p.rapidapi.com'}),
    endpoints: (builder) => ({
        getRelatedNews: builder.query({
          query: (hunt) => createRequest(`/search?keyword=${hunt}`)
        }),


    }),
})

export const { useGetRelatedNewsQuery } = relatedNewsApi;