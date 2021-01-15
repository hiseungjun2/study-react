import React, {useState, useCallback} from 'react';
import {Route } from 'react-router-dom';
import NewsPage from './page/NewsPage'
import NewsList from './components/NewsList'
import Categories from './components/Categories'

const App = () => {
  // react router 사용하기 위해 주석처리
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category)
  // , []);
  return <Route path="/:category?" component={NewsPage} />;
    // <>
    // <Categories category={category} onSelect={onSelect}></Categories>
    // <NewsList category={category}></NewsList>
    // </>
};

export default App;