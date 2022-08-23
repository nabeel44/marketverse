import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'a1fd0845c5msh3e4f28932a42109p101518jsn623d176a2a9b',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

 const createRequest = (url) => ({url, headers: cryptoApiHeaders})

 export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com'}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (uuid) => createRequest(`/coin/${uuid}`),
        }),
        getCryptoHistory: builder.query({
            query: ({uuid, timeperiod}) => createRequest(`/coin/${uuid}/history?timeperiod=${timeperiod}`),
        }),
    })
})

export const {useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery} = cryptoApi;