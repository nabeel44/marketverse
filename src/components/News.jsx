import React, {useState, useEffect} from 'react'
import { Select, Typography, Row, Col, Avatar, Card} from 'antd';
import moment from 'moment';
import axios from 'axios';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/crptonews.jpg';

const { Text, Title } = Typography;
const {Option} = Select;

const News = ({ simplified }) => {

  var count = simplified ? 6 : 12
  const {data: cryptoNews, isFetching} = useGetCryptoNewsQuery(count)

  if(!cryptoNews?.value | isFetching) return <Loader/> 




  return (
    <Row gutter={[24,24]}>
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card className='news-card'>
            <a href={news.url} target='_blank' rel='noreferrer'>
              <div className='news-image-container'>
                <Title className='news-title' level={4}>{news.name}</Title>
                <img style={{ maxWidth: '200px', maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt='news'/>
              </div>
              <p>
                {news.description > 100 ? `${news.description.substring(0,100)}...`
                : news.description
      }
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt='news'/>
                  <Text className='provider-name'>{news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
    
  )
}

export default News

/*
      {!simplified && (
        <Col span={24}>
          <Select
          showSearch
          className='select-news'
          placeholder='Select a Crypto'
          optionFilterProp='children'
          onChange={(value) => console.log(value)}
          filterOption={(input, option) => option.children.toLowerCase().indexof(input.toLowerCase()) >= 0}>
            <Option value='CryptoCurrency'>Cryptocurrency</Option>
          </Select>
        </Col>
      )}
      */