import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd'
import './App.css';
import { useGetCryptoNewsQuery } from './services/cryptoNewsApi';
import {Navbar, Homepage, Cryptocurrencies, News, CryptoDetails} from './components';

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='main'>
            <Layout>
                <div className='Routes'>
                    <Routes>
                        <Route path='/' element={<Homepage />}/>
                        <Route path='/cryptocurrencies' element={<Cryptocurrencies />}/>
                        <Route path='/cyrpto/:coinId' element ={<CryptoDetails/>}/>
                        <Route path='/news' element={<News/>}/>
                    </Routes>
                </div>
            </Layout>
        <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
            <Space>
                <Link to='/'>Home</Link>
                <Link to='/news'>News</Link>
            </Space>

            </div>
        </div>
    </div>
  );
}



export default App