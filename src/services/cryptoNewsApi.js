import React from 'react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { buildQueries } from '@testing-library/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'a1fd0845c5msh3e4f28932a42109p101518jsn623d176a2a9b',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

//const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://bing-news-search1.p.rapidapi.com'}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (count) => createRequest(`/news/search?q=Cryptocurrency&safeSearch=Off&textFormat=Raw&freshness=Day&count=6`)
        })
    })
})

export const {useGetCryptoNewsQuery} = cryptoNewsApi;


///news/search?q=bitcoin&safeSearch=Off&textFormat=Raw&freshness=Day&count=10
//https://bing-news-search1.p.rapidapi.com/news/news/search?q=bitcoin&safeSearch=Off&textFormat=Raw&freshness=Day&count=10
//https://www.bing.com/news/search?q=bitcoin&qs=n&form=QBNT&sp=-1&pq=cryptocurrency&sc=10-14&sk=&cvid=F1774172983D4342BA3D06CC00897238&ghsh=0&ghacc=0&ghpl=
//https://www.bing.com/news/search?q=bitcoin
//https://bing-news-search1.p.rapidapi.com/news/news/search?q=bitcoin&safeSearch=Off&textFormat=Raw&freshness=Day&count=10