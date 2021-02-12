import logo from './logo.svg';
import './App.css';
import React, { Component, useState, Suspense } from 'react';
import loadable from '@loadable/component';
// dynamic import 위한 삭제
// 메서드에 import() 형식으로 안에서 사용하면, build 시 파일을 따로 분리시켜서 저장함
// import notify from './notify';

// const SplitMe = React.lazy(() => import('./SplitMe'));
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback : <div>loadding...</div>
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    // import('./notify').then(result => result.default());
    setVisible(true);
  }
  const onMouseOver = () => {
    SplitMe.preload();
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
          {visible && <SplitMe/>}
      </header>
    </div>
  );
}
export default App;


// class App extends Component {
//   state = {
//     SplitMe : null
//   };
//   handleClick = async () => {
//     const loadedModule = await import('./SplitMe');
//     this.setState({
//       SplitMe : loadedModule.default
//     })
//   };
//   render() {
//     const { SplitMe } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p onClick={this.handleClick}>hello React!</p>
//           {SplitMe && <SplitMe/>}
//         </header>
//       </div>
//     )
//   }
// };
// export default App;