import logo from './logo.svg';
import './App.css';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  // Link 는 a 태그와 비슷한 기능을 함, 그러나 a 태그는 페이지 전체를 새로고침하는 대신에 Link 는 페이지의 주소만 변경함
  // path 에 2개 이상의 주소를 지정 가능
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">히스토리</Link>
        </li>
      </ul>
      <hr/>
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path={["/about", "/info"]} component={About}/>
        <Route path="/profiles" component={Profiles}/>
        <Route path="/history" component={HistorySample}/>
        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({location}) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
