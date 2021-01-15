// API를 요청하고 뉴스 데이터가 들어있는 배열을 컴포넌트 배열로 변환하여 렌더링해주는 컴포넌트
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing : border-box;
    padding-bottom : 3rem;
    width : 768px;
    margin : 0 auto;
    margin-top : 2rem;
    @media screen and (max-width : 768px) {
        width : 100%;
        padding-left : 1rem;
        padding-right : 1rem;
    }
`;

const NewsList = ({category}) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=ebaaaa2531604e4db596a766c61328e6`);
    }, [category]);

    // 대기 중일 때
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>
    };

    // 아직 response 값이 설정되지 않았을 때
    if (!response) {
        return null;
    }

    // 에러가 발생했을 때
    if (error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>
    }

    // response 값이 유효할 때
    const { articles } = response.data;
    

    // const [articles, setArticles] = useState(null);
    // const [loading,  setLoading] = useState(false);
    
    // useEffect(() => {
    //     // async를 사용하는 함수 따로 선언
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {
    //             const query = category === 'all' ? '' : `&category=${category}`;
    //             const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=ebaaaa2531604e4db596a766c61328e6`);
                
    //             setArticles(response.data.articles);
    //         } catch(e) {
    //             console.log(e);
    //         }

    //         setLoading(false);
    //     };
    //     fetchData();
    // }, [category]);

    // // 대기 중일 때
    // if (loading) {
    //     return <NewsListBlock>대기 중...</NewsListBlock>
    // };
    // // 아직 articles 값이 설정되지 않았을 때
    // if (!articles) {
    //     return null;
    // }
    
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article}></NewsItem>
            ))}
        </NewsListBlock>
    );
};

export default NewsList;