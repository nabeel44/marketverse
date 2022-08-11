//import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic} from 'antd'
import {Link} from 'react-router-dom';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Cryptocurrencies, News} from '../components';

//import { useGetCryptosQuery } from '../services/cryptoApi';
//"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
//coinranking2ecfe7c0b35eac2d3352be8c286bf0441da41cc2bb7dd09d
//https://api.coingecko.com/api/v3/global

const { Title} = Typography;

const Homepage = () => {
  const [globalData, setGlobalData] = useState([]);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/global")
    .then(res => {
        setGlobalData(res.data);
  })
  .catch(error => console.log(error));
},[]);
const globalStats = globalData?.data;
//console.log('global', globalStats);

if(!globalData?.data) return 'Loading...';

  return (
    <>
    <Title level = {2} className='heading'>Global Crypto Stats</Title>
    <Row>
      <Col span={12}><Statistic title='Total Exchanges' value={globalStats.markets} /></Col>
      <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.total_market_cap.usd)} /></Col>
      <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStats.total_volume.usd)} /></Col>
      <Col span={12}><Statistic title='Total Markets' value={globalStats.markets} /></Col>
    </Row>
    <div className='home-heading-contianer'>
      <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
      <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Title>
    </div>
    <Cryptocurrencies simplified/>
    <div className='home-heading-contianer'>
      <Title level={2} className='home-title'>Latest Crypto News</Title>
      <Title level={3} className='show-more'><Link to='/news'>Show More</Link></Title>
    </div>
    <News simplified />
    </>
  )
}

export default Homepage

/*
<Col span={12}><Statistic title='Total Cryptocurrences' value={globalStats.active_cryptocurrencies} /></Col>
      <Col span={12}><Statistic title='Total Exchanges' value={globalStats.markets} /></Col>
      <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.total_market_cap.usd)} /></Col>
      <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStats.total_volume.usd)} /></Col>
      <Col span={12}><Statistic title='Total Markets' value={globalStats.markets} /></Col>

      <Col span={12}><Statistic title='Total Cryptocurrencies' value='5' /></Col>
      <Col span={12}><Statistic title='Total Market Cap' value='5'/></Col>
      <Col span={12}><Statistic title='Total Exchanges' value='5' /></Col>
      <Col span={12}><Statistic title='Total 24h Volume' value='5' /></Col>
      */