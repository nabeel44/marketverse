import React, {useState, useEffect} from 'react'
import axios from 'axios';
import millify  from 'millify';
import {Link} from 'react-router-dom';
import {Card, Row, Col, Input} from 'antd';
import CryptoDetails from './CryptoDetails';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Cyrptocurrencies = ({ simplified }) => {
  var count = simplified ? 10 : 100
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count);
  var [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] =  useState('');
  useEffect(() =>  {
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

    setCryptos(filteredData);
  },[cryptosList, searchTerm])

  if (isFetching) return "Loading..."
  if (typeof cryptos === 'undefined') return 'Please visit home and try again'
  


  return (
    <>
    {!simplified && (
          <div className='search-crypto'>
          <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
    )}
      <Row gutter = {[32,32]} className='crypto-card-container'>
        {cryptos?.map((currency)=> (
          <Col key={currency.id} xs={24} sm={12} lg={6} className='crypto-card'>
            <Link to={`/crypto/${currency.id}`}>
              <Card
              title={`${currency.rank}. ${currency.name}`}
              extra={<img className='crypto-image' src={currency.iconUrl} />}
              hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cyrptocurrencies