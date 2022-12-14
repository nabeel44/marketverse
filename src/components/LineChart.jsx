import React from 'react';
import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography} from 'antd';
import {Chart as ChartJS, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)
const {Title} = Typography;

const LineChart = ({coinHistory, currentPrice, coinName}) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history.length; i += 1) {
    coinPrice.push(coinHistory?.data.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data.history[i].timestamp).toLocaleDateString());
  }
  console.log('coinTimestamp', coinHistory);
  console.log(coinTimestamp)
  
  const [data, setData]= useState({
    labels: coinTimestamp,
    datasets:[
      {
        label:'Price in USD',
        data:coinPrice,
        backgroundColor:'#0071bd',
        borderColor:'#0071bd',
        //tension:0.4,
        fill:false,
        //pointStyle:'rect',
        //pointBorderColor:'blue',
        //pointBackgroundColor:'#yellow',
        //showLine:true
      }
    ]
  })

  const [options, setOptions] = useState({
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          }
        }
      ]
    }
  })
  return (
    <>
    <Row className='chart-header'>
      <Title level={2} className='chart-title'></Title>
      <Col className='price-container'>
        <Title level={5} className='price-change'>Change: {coinHistory?.data?.change}%</Title>
        <Title level={5} className='current-price'>Current {coinName} Price: $ {currentPrice}</Title>
      </Col>
    </Row>
    <Line data={data} />
    </>
  );
};
  


export default LineChart;





/*
import React from 'react'
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {Col, Row, Typography} from 'antd';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)


//const {Title} = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for(let i=0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data.history[i]?.price)
    }

    for (let i=0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory?.data.history[i]?.timestamp).toLocaleDateString());
    }

    const [data, setData] = useState({
      labels: coinTimestamp,
      datasets: [
        {
          label: 'Price in USD',
          data: coinPrice,
          backgroundColor: 'yellow',
          borderColor: 'green', 
          fill: true,
          pointStyle: 'rect',
          pointBorderColor: 'blue',
          pointBackgroundColor:'#fff',
          showLine: true
        }
      ]
    })


  return (
    <>
    <Row className='chart-header'>
        <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
        <Col className='price-container'>
            <Title level={5} className='price-change'>{coinHistory?.data?.change}%</Title>
            <Title level={5} className='current-price'>Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
    </Row>
    <Line data={data} />
    </>
  )
}

export default LineChart

*/