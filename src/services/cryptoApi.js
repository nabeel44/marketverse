import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
/*
const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'a1fd0845c5msh3e4f28932a42109p101518jsn623d176a2a9b',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

 const createRequest = (url) => ({url, headers: cryptoApiHeaders})

  export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
  })

export const { useGetCryptosQuery } = createApi;
*/

const [coins, setCoins] = useState([]);
useEffect(() => {
    axios.get('https://coinranking1.p.rapidapi.com/coins')
    .then(res => {
        setCoins(res.data);
        console.log(res.data);
    })

})
