import React, {useState, useEffect} from 'react'
import axios from 'axios';
import millify  from 'millify';
import {Link} from 'react-router-dom';
import {Card, Row, Col, Input} from 'antd';
import CryptoDetails from './CryptoDetails';

const Cyrptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${count}&page=1&sparkline=false`)
    .then(res => {
        setCoins(res.data);
  })
  .catch(error => console.log(error));
},[]);
//console.log(coins)

//if (simplified === 10) coins.splice(9,90);


  return (
    <>
      <Row gutter = {[32,32]} className='crypto-card-container'>
        {coins?.map((currency)=> (
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card title={`${currency.market_cap_rank}. ${currency.id[0].toUpperCase() + currency.id.slice(1)}`}
              extra={<img className='crypto-image' src={currency.image} />}
              hoverable
              >
                <p>Price: {millify(currency.current_price)}</p>
                <p>Market Cap: {millify(currency.market_cap)}</p>
                <p>Daily Change: {millify(currency.price_change_percentage_24h)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cyrptocurrencies