import React, { useState, useEffect } from 'react';
import * as S from './BookmarkPage.styled';
import { Layout } from '../../layout/Layout';
import { Header } from './../../components/common/Header';
import { TravelInfo } from '../../components/travel/TravelInfo';
import like from '../../assets/icons/main/like.png';
import jeju from '../../assets/images/jeju.png';
import { Link } from 'react-router-dom';
import mainAxios from './../../apis/mainAxios';

const BookmarkPage = () => {
    const [scrapData, setScrapData] = useState([]);

    const handleScrap = async () => {
        try {
            const response = await mainAxios.get('/travel/favorites');
            console.log('BookmarkPage success', response);
            setScrapData(response.data.result);
        } catch(error) {
            console.log('BookmarkPage error', error);
        }
    }

    useEffect(() => {
        handleScrap();
    },[])

    return (
        <Layout>
            <Header />
            {scrapData.map((travel, index) => (
                <Link to={`/travel/detail/${travel.planId}`} style={{ width: "100%" }}>
                    <TravelInfo
                        key={index}
                        icon={like}
                        title={travel.city}
                        hashtag1={travel.district}
                        hashtag2={travel.style}
                        hashtag3={travel.duration}
                        // hashtag4={travel.transport[0]}
                        // image={travel.imageUrl}
                        image={jeju}
                    />
                </Link>
            ))}
        </Layout>
    )
}

export default BookmarkPage;
